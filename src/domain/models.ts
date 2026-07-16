export type EntityId = string;
export type ISODateTime = string;
export type ISODate = string;

export type DoseStatus =
  | 'pending'
  | 'taken'
  | 'snoozed'
  | 'skipped'
  | 'late';

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Person {
  id: EntityId;
  name: string;
  birthDate: ISODate | null;
  notes: string | null;
  color: string;
  photoUri: string | null;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  deletedAt: ISODateTime | null;
}

export interface Medication {
  id: EntityId;
  personId: EntityId;
  name: string;
  strength: string | null;
  form: string | null;
  instructions: string | null;
  notes: string | null;
  startDate: ISODate;
  endDate: ISODate | null;
  continuousUse: boolean;
  active: boolean;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  deletedAt: ISODateTime | null;
}

export interface MedicationSchedule {
  id: EntityId;
  medicationId: EntityId;
  time: string;
  weekdays: Weekday[];
  amount: number;
  unit: string;
  instructions: string | null;
  active: boolean;
  notificationId: string | null;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  deletedAt: ISODateTime | null;
}

export interface DoseEvent {
  id: EntityId;
  personId: EntityId;
  medicationId: EntityId;
  scheduleId: EntityId;
  scheduledFor: ISODateTime;
  completedAt: ISODateTime | null;
  status: DoseStatus;
  notes: string | null;
  source: 'mobile_local';
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}
