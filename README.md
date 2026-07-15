# Re Medicamentos

Aplicativo mobile offline-first do ecossistema **Nosso Zelo** para organização de medicamentos de uma ou mais pessoas.

O projeto começa como um aplicativo local, sem obrigatoriedade de conta ou internet. Em etapas posteriores, receberá backup online, sincronização, integração com o site Nosso Zelo e participação autorizada de cuidadores e profissionais de saúde.

## Estado atual

Já está disponível na branch `feat/bootstrap-mobile`:

- fundação Expo + React Native + TypeScript;
- Expo Router;
- SQLite local com WAL e chaves estrangeiras;
- cadastro de pessoas;
- listagem em ordem alfabética;
- edição;
- arquivamento por exclusão lógica;
- validação com React Hook Form e Zod;
- geração de UUID;
- registro das alterações na futura fila de sincronização;
- identidade visual baseada no Nosso Zelo.

## Executar

```bash
npm install
npm run start
```

Validações:

```bash
npm run typecheck
npm run lint
```

O `package-lock.json` será criado pelo primeiro `npm install` realizado localmente.

## Objetivo do MVP

- cadastrar várias pessoas;
- cadastrar e organizar medicamentos por pessoa;
- configurar um ou mais horários por medicamento;
- receber notificações locais;
- registrar doses tomadas, adiadas, ignoradas ou atrasadas;
- consultar agenda diária e histórico local;
- exportar e importar backup local;
- funcionar sem internet.

## Stack

- React Native com Expo;
- TypeScript;
- Expo Router;
- SQLite;
- Drizzle ORM para schema tipado;
- React Hook Form;
- Zod;
- Expo Notifications;
- date-fns.

## Documentação

A documentação completa está organizada em `docs/`, cobrindo produto, domínio, arquitetura, banco, sincronização, UX, execução, integração e segurança.

## Limite clínico

O aplicativo organiza informações fornecidas pelo usuário. O MVP não diagnostica, não recomenda medicamentos, não define doses e não substitui orientação médica.
