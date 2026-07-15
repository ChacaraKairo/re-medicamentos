# Integração com o Nosso Zelo

## Objetivo

Permitir que dados do aplicativo sejam acessados no site por pessoas autorizadas, sem remover a capacidade offline do mobile.

## Limite da primeira integração

A primeira versão conectada deve oferecer:

- conta opcional;
- backup online;
- restauração em outro aparelho;
- vínculo de pessoas cuidadas;
- consulta de medicamentos e horários no site;
- observações simples;
- acesso concedido e revogável a cuidadores.

## Contextos

### Aplicativo mobile

- fonte operacional offline;
- cadastro e agenda;
- notificações locais;
- registro de doses;
- sincronização quando disponível.

### Site Nosso Zelo

- identificação e contratação de cuidadores;
- painel autorizado da pessoa cuidada;
- consulta de horários;
- registro de observações;
- visualização de histórico conforme permissão.

### API de cuidados

Responsável por:

- autenticação e autorização;
- persistência remota;
- sincronização;
- convites;
- permissões;
- auditoria;
- integração entre mobile e site.

## Modelo de acesso

Entidades futuras:

- UserAccount;
- CareProfile;
- CareMembership;
- Role;
- Permission;
- Invitation;
- AuditEvent.

Papéis iniciais:

- owner;
- family;
- caregiver;
- health_professional.

Permissões granulares:

- view_person;
- view_medications;
- manage_medications;
- view_schedule;
- record_dose;
- view_history;
- add_observation;
- manage_members;
- export_data.

O papel fornece um conjunto padrão, mas o acesso efetivo deve ser calculado por permissões e vínculo ativo.

## Vínculo com cuidadores do site

1. responsável seleciona ou contrata cuidador no Nosso Zelo;
2. responsável envia convite para um perfil de cuidado;
3. cuidador aceita usando conta autenticada;
4. API cria membership com permissões limitadas;
5. ações passam a ser registradas em auditoria;
6. responsável pode revogar o acesso.

A contratação no marketplace não deve conceder automaticamente acesso a dados sensíveis.

## Histórico de autoria

Registros futuros devem identificar:

- quem realizou a ação;
- papel no momento da ação;
- origem: mobile, site ou integração;
- data do evento;
- data do registro;
- alterações posteriores.

## API inicial sugerida

```text
GET    /api/v1/care/people
POST   /api/v1/care/people
GET    /api/v1/care/people/:id/medications
POST   /api/v1/care/people/:id/medications
GET    /api/v1/care/people/:id/schedule
GET    /api/v1/care/people/:id/history
POST   /api/v1/care/dose-occurrences/:id/actions
POST   /api/v1/care/people/:id/invitations
GET    /api/v1/care/sync
POST   /api/v1/care/sync
```

## Compatibilidade visual

Os módulos do site e do aplicativo devem compartilhar tokens de cor, tipografia, espaçamento, status e ícones. No futuro, esses tokens podem virar um pacote versionado comum.

## Restrições

- nenhuma conta do site acessa dados sem vínculo explícito;
- cuidador não altera medicamento por padrão;
- observação médica não altera automaticamente tratamento;
- revogação deve interromper acesso imediatamente no servidor;
- dispositivos offline podem manter dados previamente sincronizados, exigindo política clara de remoção local.
