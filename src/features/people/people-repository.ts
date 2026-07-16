import { randomUUID } from 'expo-crypto';

import { getDatabase } from '@/database/client';
import type { PersonFormValues } from '@/features/people/person-schema';

export type PersonRecord = {
  id: string;
  name: string;
  birthDate: string | null;
  notes: string | null;
  color: string;
  photoUri: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

type PersonRow = {
  id: string;
  name: string;
  birth_date: string | null;
  notes: string | null;
  color: string;
  photo_uri: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

function mapPerson(row: PersonRow): PersonRecord {
  return {
    id: row.id,
    name: row.name,
    birthDate: row.birth_date,
    notes: row.notes,
    color: row.color,
    photoUri: row.photo_uri,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    deletedAt: row.deleted_at,
  };
}

async function enqueueSync(
  entityId: string,
  operation: 'create' | 'update' | 'delete',
  payload: unknown,
): Promise<void> {
  const database = await getDatabase();
  const now = new Date().toISOString();

  await database.runAsync(
    `INSERT INTO sync_queue
      (id, entity_type, entity_id, operation, payload, attempts, created_at, synced_at)
     VALUES (?, 'person', ?, ?, ?, 0, ?, NULL)`,
    randomUUID(),
    entityId,
    operation,
    JSON.stringify(payload),
    now,
  );
}

export async function listPeople(): Promise<PersonRecord[]> {
  const database = await getDatabase();
  const rows = await database.getAllAsync<PersonRow>(
    `SELECT * FROM people
     WHERE deleted_at IS NULL
     ORDER BY name COLLATE NOCASE ASC`,
  );

  return rows.map(mapPerson);
}

export async function getPerson(id: string): Promise<PersonRecord | null> {
  const database = await getDatabase();
  const row = await database.getFirstAsync<PersonRow>(
    'SELECT * FROM people WHERE id = ? AND deleted_at IS NULL LIMIT 1',
    id,
  );

  return row ? mapPerson(row) : null;
}

export async function createPerson(values: PersonFormValues): Promise<PersonRecord> {
  const database = await getDatabase();
  const now = new Date().toISOString();
  const person: PersonRecord = {
    id: randomUUID(),
    name: values.name.trim(),
    birthDate: values.birthDate || null,
    notes: values.notes || null,
    color: values.color,
    photoUri: null,
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
  };

  await database.runAsync(
    `INSERT INTO people
      (id, name, birth_date, notes, color, photo_uri, created_at, updated_at, deleted_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL)`,
    person.id,
    person.name,
    person.birthDate,
    person.notes,
    person.color,
    person.photoUri,
    person.createdAt,
    person.updatedAt,
  );

  await enqueueSync(person.id, 'create', person);
  return person;
}

export async function updatePerson(
  id: string,
  values: PersonFormValues,
): Promise<PersonRecord> {
  const current = await getPerson(id);
  if (!current) throw new Error('Pessoa não encontrada.');

  const database = await getDatabase();
  const updated: PersonRecord = {
    ...current,
    name: values.name.trim(),
    birthDate: values.birthDate || null,
    notes: values.notes || null,
    color: values.color,
    updatedAt: new Date().toISOString(),
  };

  await database.runAsync(
    `UPDATE people
     SET name = ?, birth_date = ?, notes = ?, color = ?, updated_at = ?
     WHERE id = ? AND deleted_at IS NULL`,
    updated.name,
    updated.birthDate,
    updated.notes,
    updated.color,
    updated.updatedAt,
    id,
  );

  await enqueueSync(id, 'update', updated);
  return updated;
}

export async function archivePerson(id: string): Promise<void> {
  const database = await getDatabase();
  const now = new Date().toISOString();

  const result = await database.runAsync(
    `UPDATE people
     SET deleted_at = ?, updated_at = ?
     WHERE id = ? AND deleted_at IS NULL`,
    now,
    now,
    id,
  );

  if (result.changes === 0) throw new Error('Pessoa não encontrada.');
  await enqueueSync(id, 'delete', { id, deletedAt: now });
}
