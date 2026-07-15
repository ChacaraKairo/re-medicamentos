import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const timestamps = {
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
  deletedAt: text('deleted_at'),
};

export const people = sqliteTable('people', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  birthDate: text('birth_date'),
  notes: text('notes'),
  color: text('color').notNull(),
  photoUri: text('photo_uri'),
  ...timestamps,
});

export const medications = sqliteTable('medications', {
  id: text('id').primaryKey(),
  personId: text('person_id')
    .notNull()
    .references(() => people.id, { onDelete: 'restrict' }),
  name: text('name').notNull(),
  strength: text('strength'),
  form: text('form'),
  instructions: text('instructions'),
  notes: text('notes'),
  startDate: text('start_date').notNull(),
  endDate: text('end_date'),
  continuousUse: integer('continuous_use', { mode: 'boolean' })
    .notNull()
    .default(false),
  active: integer('active', { mode: 'boolean' }).notNull().default(true),
  ...timestamps,
});

export const medicationSchedules = sqliteTable('medication_schedules', {
  id: text('id').primaryKey(),
  medicationId: text('medication_id')
    .notNull()
    .references(() => medications.id, { onDelete: 'restrict' }),
  time: text('time').notNull(),
  weekdaysJson: text('weekdays_json').notNull(),
  amount: real('amount').notNull(),
  unit: text('unit').notNull(),
  instructions: text('instructions'),
  active: integer('active', { mode: 'boolean' }).notNull().default(true),
  notificationId: text('notification_id'),
  ...timestamps,
});

export const doseEvents = sqliteTable('dose_events', {
  id: text('id').primaryKey(),
  personId: text('person_id')
    .notNull()
    .references(() => people.id, { onDelete: 'restrict' }),
  medicationId: text('medication_id')
    .notNull()
    .references(() => medications.id, { onDelete: 'restrict' }),
  scheduleId: text('schedule_id')
    .notNull()
    .references(() => medicationSchedules.id, { onDelete: 'restrict' }),
  scheduledFor: text('scheduled_for').notNull(),
  completedAt: text('completed_at'),
  status: text('status', {
    enum: ['pending', 'taken', 'snoozed', 'skipped', 'late'],
  }).notNull(),
  notes: text('notes'),
  source: text('source', { enum: ['mobile_local'] })
    .notNull()
    .default('mobile_local'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const syncQueue = sqliteTable('sync_queue', {
  id: text('id').primaryKey(),
  entityType: text('entity_type').notNull(),
  entityId: text('entity_id').notNull(),
  operation: text('operation', {
    enum: ['create', 'update', 'delete'],
  }).notNull(),
  payload: text('payload').notNull(),
  attempts: integer('attempts').notNull().default(0),
  createdAt: text('created_at').notNull(),
  syncedAt: text('synced_at'),
});
