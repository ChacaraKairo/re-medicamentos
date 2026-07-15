# Roadmap

## Fase 0 — Fundação

- documentação funcional e técnica;
- definição do design system;
- criação do projeto Expo/TypeScript;
- configuração de lint, testes e CI;
- banco SQLite e migrações;
- componentes visuais básicos.

## Fase 1 — MVP offline

- cadastro de pessoas;
- cadastro de medicamentos;
- horários e recorrência semanal;
- agenda diária;
- notificações locais;
- registro de doses;
- histórico local;
- exportação e importação de backup.

## Fase 2 — Qualidade e publicação inicial

- testes em aparelhos Android e iOS;
- acessibilidade;
- tratamento de permissões e restrições de bateria;
- política de privacidade;
- observabilidade sem conteúdo sensível;
- distribuição interna ou beta.

## Fase 3 — Backend e conta opcional

- autenticação;
- API versionada;
- PostgreSQL;
- backup criptografado;
- restauração em outro aparelho;
- fila de sincronização;
- resolução de conflitos;
- auditoria.

## Fase 4 — Integração Nosso Zelo

- vínculo entre conta do aplicativo e conta do site;
- pessoa cuidada compartilhável;
- convites e permissões;
- agenda e observações no site;
- registro de administração por cuidador;
- notificações remotas.

## Fase 5 — Histórico de cuidados

- alimentação;
- hidratação;
- higiene;
- sono;
- pressão, glicemia e temperatura;
- sintomas e ocorrências;
- anexos;
- relatórios por período.

## Fase 6 — Profissionais de saúde

- acesso concedido e revogável;
- observações profissionais;
- trilha de auditoria;
- relatórios clínicos informativos;
- fluxo específico para alterações de tratamento.

## Critério de passagem entre fases

Uma fase só deve avançar quando:

- critérios de aceite estiverem concluídos;
- migrações estiverem testadas;
- dados existentes forem preservados;
- riscos de segurança estiverem avaliados;
- documentação refletir o estado implementado.
