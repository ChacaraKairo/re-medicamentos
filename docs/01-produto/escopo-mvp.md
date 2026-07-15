# Escopo do MVP

## Objetivo

Validar a organização offline de medicamentos para múltiplas pessoas em um único celular.

## Funcionalidades incluídas

### Pessoas

- criar, visualizar, editar e arquivar pessoa;
- nome obrigatório;
- foto, data de nascimento, cor e observações opcionais;
- selecionar pessoa ativa;
- visualizar quantidade de medicamentos ativos e próxima dose.

### Medicamentos

- criar, visualizar, editar, pausar e arquivar medicamento;
- nome obrigatório;
- concentração, apresentação, dose, instruções e observações;
- data inicial;
- data final opcional;
- tratamento contínuo ou temporário;
- um ou vários horários;
- dias da semana configuráveis.

### Agenda e doses

- agenda diária de todas as pessoas ou de uma pessoa;
- estados: pendente, tomado, adiado, ignorado, atrasado e cancelado;
- registrar data prevista e data efetiva;
- adicionar observação à ocorrência;
- preservar o histórico.

### Notificações

- notificações locais sem internet;
- identificação da pessoa, medicamento e dose;
- reagendamento ao criar ou editar horários;
- cancelamento ao pausar ou arquivar tratamento;
- recuperação após reinicialização, conforme suporte da plataforma.

### Backup local

- exportar dados para arquivo versionado;
- importar arquivo válido;
- validar versão e integridade;
- permitir substituição ou mesclagem somente com confirmação clara.

### Configurações

- tema claro inicialmente;
- tamanho de texto;
- estado das permissões de notificação;
- exportar e importar backup;
- informações de versão.

## Fora do MVP

- conta e login;
- backend e API;
- backup em nuvem;
- sincronização entre celulares;
- painel do cuidador no site;
- acesso médico;
- OCR e leitura de receita;
- código de barras;
- interação medicamentosa;
- sugestão de dose;
- chat ou inteligência artificial;
- estoque e reposição avançados;
- assinatura ou pagamentos.

## Definição de pronto do MVP

O MVP estará pronto quando um usuário conseguir, sem internet:

1. instalar e abrir o aplicativo;
2. cadastrar duas ou mais pessoas;
3. cadastrar medicamentos e horários separados para cada pessoa;
4. receber uma notificação local;
5. registrar uma dose;
6. visualizar o evento no histórico correto;
7. editar um horário sem duplicar notificações;
8. exportar e restaurar um backup;
9. manter os dados após fechar e reabrir o aplicativo;
10. concluir os fluxos principais sem falhas bloqueadoras.
