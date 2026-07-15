# Re Medicamentos

Aplicativo mobile offline-first do ecossistema **Nosso Zelo** para organização de medicamentos de uma ou mais pessoas.

O projeto começa como um aplicativo local, sem obrigatoriedade de conta ou internet. Em etapas posteriores, receberá backup online, sincronização, integração com o site Nosso Zelo e participação autorizada de cuidadores e profissionais de saúde.

## Estado atual

O bootstrap técnico do aplicativo já contém:

- Expo, React Native e TypeScript;
- navegação com Expo Router;
- primeira tela do MVP;
- tokens visuais derivados do Nosso Zelo;
- modelos iniciais de pessoa, medicamento, horário e evento de dose;
- schema SQLite inicial com Drizzle ORM;
- estrutura preparada para notificações locais e sincronização futura.

Os botões da tela inicial ainda são demonstrativos. O primeiro fluxo funcional será o cadastro local de pessoas.

## Executar localmente

Requisitos:

- Node.js LTS;
- npm;
- Android Studio ou um aparelho Android com Expo Go;
- Xcode para execução local no iOS, quando estiver em macOS.

```bash
git clone https://github.com/ChacaraKairo/re-medicamentos.git
cd re-medicamentos
git checkout feat/bootstrap-mobile
npm install
npm run start
```

Depois, escolha uma das opções exibidas pelo Expo:

```bash
npm run android
npm run ios
npm run web
```

Verificações locais:

```bash
npm run typecheck
npm run lint
```

> O arquivo de lock deverá ser gerado e versionado após a primeira instalação validada das dependências.

## Objetivo atual

Entregar um MVP mobile que permita:

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
- Drizzle ORM;
- Zustand;
- React Hook Form;
- Zod;
- Expo Notifications;
- date-fns.

## Princípios

1. Offline primeiro.
2. Acessibilidade para idosos, familiares e cuidadores.
3. Dados separados por pessoa cuidada.
4. Histórico preservado em vez de sobrescrito.
5. Preparação para sincronização futura.
6. Privacidade e coleta mínima de dados.
7. Identidade visual alinhada ao Nosso Zelo.

## Documentação

- [Visão do produto](docs/01-produto/visao-produto.md)
- [Escopo do MVP](docs/01-produto/escopo-mvp.md)
- [Roadmap](docs/01-produto/roadmap.md)
- [Regras de negócio](docs/02-dominio/regras-negocio.md)
- [Modelo de domínio](docs/02-dominio/modelo-dominio.md)
- [Arquitetura](docs/03-arquitetura/arquitetura.md)
- [Banco de dados offline](docs/03-arquitetura/banco-dados.md)
- [Sincronização futura](docs/03-arquitetura/sincronizacao.md)
- [Telas e navegação](docs/04-ux/telas-navegacao.md)
- [Design system](docs/04-ux/design-system.md)
- [Plano de desenvolvimento](docs/05-execucao/plano-desenvolvimento.md)
- [Critérios de aceite](docs/05-execucao/criterios-aceite.md)
- [Integração com Nosso Zelo](docs/06-integracao/integracao-nosso-zelo.md)
- [Segurança e privacidade](docs/07-seguranca/seguranca-privacidade.md)

## Limite clínico

O aplicativo organiza informações fornecidas pelo usuário. O MVP não diagnostica, não recomenda medicamentos, não define doses e não substitui orientação médica.
