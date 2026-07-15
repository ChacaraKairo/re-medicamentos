# Sincronização Futura

## Objetivo

Adicionar backup e compartilhamento sem transformar a internet em requisito para consultar agenda ou registrar uma dose.

## Princípios

- SQLite continua sendo a base operacional do mobile;
- mutações locais são salvas antes de qualquer chamada remota;
- cada mutação gera item na `sync_queue`;
- sincronização é idempotente;
- a API aceita UUID criado no dispositivo;
- falhas usam retry com backoff;
- conflitos são registrados e observáveis;
- conteúdo sensível não aparece em logs técnicos.

## Metadados futuros

Entidades sincronizadas devem receber:

```text
remote_version
last_synced_at
created_by_user_id
updated_by_user_id
device_id
```

## Fluxo de envio

1. usuário altera dado local;
2. transação salva entidade e item da fila;
3. worker encontra conexão disponível;
4. envia operação com chave idempotente;
5. servidor valida permissão e versão;
6. servidor confirma nova versão;
7. aplicativo marca item como processado.

## Fluxo de recebimento

1. aplicativo envia cursor de sincronização;
2. API retorna alterações permitidas;
3. aplicativo aplica lote em transação;
4. conflitos são resolvidos conforme política da entidade;
5. cursor local é atualizado somente após sucesso.

## Política inicial de conflitos

- configurações pessoais: última alteração válida vence;
- dados cadastrais: sinalizar conflito quando ambos os lados mudaram;
- dose registrada: preservar eventos e evitar perda por sobrescrita;
- observações: manter versões ou histórico de edição;
- exclusão: tombstone com `deleted_at`.

## Backup não é sincronização

Backup é uma cópia restaurável. Sincronização mantém múltiplos clientes coerentes. A fase de backup pode ser entregue antes da sincronização bidirecional.

## API futura

Prefixo sugerido: `/api/v1/care`.

Recursos:

- accounts;
- people;
- medications;
- schedules;
- dose-occurrences;
- observations;
- memberships;
- permissions;
- sync;
- audit-events.
