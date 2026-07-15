# Arquitetura

## Visão geral

O MVP será um aplicativo mobile offline-first. A camada de interface não acessa SQLite diretamente; utiliza casos de uso e repositórios para permitir troca ou extensão da infraestrutura no futuro.

```text
UI / Expo Router
      ↓
Application / Use Cases
      ↓
Domain
      ↓
Repository Interfaces
      ↓
SQLite + Drizzle
      ↓
Expo Notifications / File System
```

## Camadas

### Presentation

- telas e componentes React Native;
- navegação Expo Router;
- formulários;
- estados de carregamento, vazio e erro;
- acessibilidade;
- tradução entre interação do usuário e casos de uso.

### Application

Casos de uso sugeridos:

- CreatePerson;
- UpdatePerson;
- ArchivePerson;
- CreateMedication;
- UpdateMedication;
- PauseMedication;
- CreateSchedule;
- RegenerateOccurrences;
- MarkDoseTaken;
- SnoozeDose;
- SkipDose;
- ExportBackup;
- ImportBackup.

### Domain

- entidades e tipos;
- regras de negócio;
- validações independentes da interface;
- transições de estado;
- contratos de repositório.

### Infrastructure

- SQLite e migrações;
- implementação Drizzle;
- agendamento de notificações;
- acesso a arquivos;
- relógio e identificadores;
- fila de sincronização futura.

## Estrutura de diretórios proposta

```text
src/
├── app/
├── components/
├── features/
│   ├── people/
│   ├── medications/
│   ├── schedule/
│   ├── history/
│   ├── backup/
│   └── settings/
├── domain/
│   ├── entities/
│   ├── repositories/
│   ├── services/
│   └── errors/
├── application/
│   └── use-cases/
├── infrastructure/
│   ├── database/
│   ├── notifications/
│   ├── files/
│   └── sync/
├── design-system/
├── hooks/
├── stores/
└── shared/
```

## Estado

- SQLite é a fonte persistente de verdade;
- TanStack Query pode gerenciar consultas e invalidação local;
- Zustand deve guardar apenas estado de interface e preferências efêmeras;
- dados clínicos/operacionais não devem existir somente no Zustand.

## Tratamento de datas

- datas de calendário: formato ISO `YYYY-MM-DD`;
- horários: `HH:mm`;
- ocorrências: timestamp ISO com offset;
- exibição sempre no fuso local;
- mudanças de fuso devem disparar reconciliação das próximas ocorrências.

## Testes

- unitários para regras e geração de agenda;
- integração para repositórios SQLite;
- testes dos casos de uso;
- testes de componentes críticos;
- E2E dos fluxos principais quando a base estiver estável.
