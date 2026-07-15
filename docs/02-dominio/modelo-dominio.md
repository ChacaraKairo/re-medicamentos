# Modelo de Domínio

## Entidades principais

### Person

Representa a pessoa cujos medicamentos são organizados.

- id: UUID;
- name: string;
- birthDate: date opcional;
- photoUri: string opcional;
- colorKey: string opcional;
- notes: string opcional;
- isArchived: boolean;
- createdAt, updatedAt, deletedAt.

### Medication

Representa um item de tratamento associado a uma pessoa.

- id: UUID;
- personId: UUID;
- name: string;
- strength: string opcional;
- form: string opcional;
- defaultAmount: decimal opcional;
- defaultUnit: string opcional;
- instructions: string opcional;
- notes: string opcional;
- startDate: date;
- endDate: date opcional;
- isContinuous: boolean;
- status: active, paused ou archived;
- createdAt, updatedAt, deletedAt.

### MedicationSchedule

Define quando uma dose deve ocorrer.

- id: UUID;
- medicationId: UUID;
- timeOfDay: HH:mm;
- weekdaysMask ou relação de dias;
- amount: decimal opcional;
- unit: string opcional;
- instructions: string opcional;
- isActive: boolean;
- notificationId: string opcional;
- createdAt, updatedAt, deletedAt.

### DoseOccurrence

Representa uma dose prevista para uma data e hora concretas.

- id: UUID;
- personId: UUID;
- medicationId: UUID;
- scheduleId: UUID opcional;
- scheduledFor: datetime;
- originalScheduledFor: datetime opcional;
- status: pending, taken, snoozed, skipped, late ou cancelled;
- completedAt: datetime opcional;
- note: string opcional;
- source: mobile_local inicialmente;
- createdAt, updatedAt.

### SyncQueueItem

Preparação para sincronização futura.

- id: UUID;
- entityType: string;
- entityId: UUID;
- operation: create, update ou delete;
- payload: JSON;
- attempts: integer;
- createdAt;
- processedAt opcional;
- lastError opcional.

### AppSetting

- key: string;
- value: JSON/string;
- updatedAt.

## Relacionamentos

```text
Person 1 ─── N Medication
Medication 1 ─── N MedicationSchedule
Medication 1 ─── N DoseOccurrence
Person 1 ─── N DoseOccurrence
```

## Serviços de domínio

- ScheduleGenerator: gera ocorrências dentro de uma janela móvel.
- NotificationScheduler: agenda, cancela e reconcilia notificações.
- DoseStatusService: aplica transições válidas de estado.
- BackupService: exporta, valida e importa dados.
- SyncQueueService: registra mutações sincronizáveis.

## Decisão sobre ocorrências

O sistema deve materializar ocorrências em uma janela limitada, por exemplo sete dias anteriores e trinta dias futuros. Isso simplifica agenda, histórico e ações sobre uma dose concreta sem criar infinitos registros para tratamentos contínuos.
