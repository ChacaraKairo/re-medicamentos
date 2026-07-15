# Banco de Dados Offline

## Tecnologia

- SQLite como armazenamento local;
- Drizzle ORM para schema, consultas e migrações;
- chaves UUID geradas no dispositivo;
- foreign keys habilitadas;
- migrações versionadas e testadas.

## Tabelas

### people

```text
id TEXT PRIMARY KEY
name TEXT NOT NULL
birth_date TEXT NULL
photo_uri TEXT NULL
color_key TEXT NULL
notes TEXT NULL
is_archived INTEGER NOT NULL DEFAULT 0
created_at TEXT NOT NULL
updated_at TEXT NOT NULL
deleted_at TEXT NULL
```

### medications

```text
id TEXT PRIMARY KEY
person_id TEXT NOT NULL REFERENCES people(id)
name TEXT NOT NULL
strength TEXT NULL
form TEXT NULL
default_amount REAL NULL
default_unit TEXT NULL
instructions TEXT NULL
notes TEXT NULL
start_date TEXT NOT NULL
end_date TEXT NULL
is_continuous INTEGER NOT NULL DEFAULT 0
status TEXT NOT NULL
created_at TEXT NOT NULL
updated_at TEXT NOT NULL
deleted_at TEXT NULL
```

### medication_schedules

```text
id TEXT PRIMARY KEY
medication_id TEXT NOT NULL REFERENCES medications(id)
time_of_day TEXT NOT NULL
weekdays_mask INTEGER NOT NULL
amount REAL NULL
unit TEXT NULL
instructions TEXT NULL
is_active INTEGER NOT NULL DEFAULT 1
notification_id TEXT NULL
created_at TEXT NOT NULL
updated_at TEXT NOT NULL
deleted_at TEXT NULL
```

A máscara semanal usa sete bits, um para cada dia. A convenção deve ser documentada no código e testada.

### dose_occurrences

```text
id TEXT PRIMARY KEY
person_id TEXT NOT NULL REFERENCES people(id)
medication_id TEXT NOT NULL REFERENCES medications(id)
schedule_id TEXT NULL REFERENCES medication_schedules(id)
scheduled_for TEXT NOT NULL
original_scheduled_for TEXT NULL
status TEXT NOT NULL
completed_at TEXT NULL
note TEXT NULL
source TEXT NOT NULL DEFAULT 'mobile_local'
created_at TEXT NOT NULL
updated_at TEXT NOT NULL
```

### sync_queue

```text
id TEXT PRIMARY KEY
entity_type TEXT NOT NULL
entity_id TEXT NOT NULL
operation TEXT NOT NULL
payload TEXT NOT NULL
attempts INTEGER NOT NULL DEFAULT 0
created_at TEXT NOT NULL
processed_at TEXT NULL
last_error TEXT NULL
```

### app_settings

```text
key TEXT PRIMARY KEY
value TEXT NOT NULL
updated_at TEXT NOT NULL
```

## Índices

- medications(person_id, status);
- medication_schedules(medication_id, is_active);
- dose_occurrences(person_id, scheduled_for);
- dose_occurrences(medication_id, scheduled_for);
- dose_occurrences(status, scheduled_for);
- sync_queue(processed_at, created_at).

## Integridade

- operações compostas devem usar transação;
- arquivamento não deve remover histórico;
- importação de backup deve ocorrer em transação única;
- migração falha não pode deixar schema parcialmente atualizado;
- datas e enums devem ser validados na camada de aplicação.

## Versionamento

Cada migração deve possuir:

- identificador crescente;
- descrição;
- operação de subida;
- teste com banco vazio;
- teste partindo da versão anterior;
- estratégia explícita para dados existentes.
