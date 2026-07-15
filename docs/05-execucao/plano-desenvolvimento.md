# Plano de Desenvolvimento

## Etapa 1 — Configuração

- criar app Expo com TypeScript;
- configurar Expo Router;
- ESLint, Prettier e scripts;
- testes unitários;
- CI com lint, testes e typecheck;
- tokens e componentes básicos.

## Etapa 2 — Persistência

- configurar SQLite e Drizzle;
- criar schema e primeira migração;
- repositórios de pessoas, medicamentos, horários e ocorrências;
- seeds apenas para desenvolvimento;
- testes de integração.

## Etapa 3 — Pessoas

- lista;
- cadastro e edição;
- perfil;
- arquivamento;
- estados vazio e erro.

## Etapa 4 — Medicamentos

- formulário em etapas;
- horários semanais;
- validações;
- detalhe;
- editar, pausar e arquivar.

## Etapa 5 — Agenda

- gerador de ocorrências;
- tela Hoje;
- filtros por pessoa;
- transições de dose;
- histórico.

## Etapa 6 — Notificações

- permissões;
- canais Android;
- agendamento e cancelamento;
- reconciliação;
- testes em aparelho real;
- instruções sobre otimização de bateria.

## Etapa 7 — Backup

- formato JSON versionado;
- exportação;
- compartilhamento de arquivo;
- validação e importação transacional;
- testes de restauração.

## Etapa 8 — Qualidade

- acessibilidade;
- testes de regressão;
- desempenho;
- migração de banco;
- política de privacidade;
- build Android e iOS.

## Estratégia de branches

- `main`: estável;
- branches curtas `feat/...`, `fix/...`, `docs/...`;
- pull requests pequenos;
- commits convencionais;
- nenhuma alteração de schema sem migração.

## Definition of Done por tarefa

- implementação concluída;
- validações cobertas;
- testes relevantes;
- lint e typecheck passando;
- acessibilidade básica verificada;
- documentação atualizada;
- sem credenciais no repositório.
