# Segurança e Privacidade

## Classificação dos dados

Informações sobre medicamentos, horários, sintomas e cuidados podem revelar dados de saúde. Devem ser tratadas como dados pessoais sensíveis.

## Princípios

- coleta mínima;
- finalidade clara;
- privacidade por padrão;
- acesso pelo menor privilégio;
- proteção em trânsito e repouso;
- rastreabilidade;
- exclusão e exportação;
- transparência;
- não registrar conteúdo sensível em logs.

## MVP offline

- armazenar apenas dados necessários;
- evitar CPF, endereço e documentos sem necessidade;
- não incluir dados reais em seeds ou testes;
- proteger arquivos de backup;
- informar que desinstalar o aplicativo pode remover dados locais sem backup;
- não enviar analytics com nomes, medicamentos ou observações;
- utilizar armazenamento seguro do sistema para futuros tokens e chaves.

## Backup local

O arquivo deve conter:

- versão do formato;
- data de geração;
- dados estruturados;
- checksum ou mecanismo de integridade.

Antes de uma distribuição pública, avaliar criptografia do backup por senha ou chave protegida pelo dispositivo.

## Backend futuro

- HTTPS obrigatório;
- autenticação forte;
- tokens de curta duração e rotação;
- autorização por recurso;
- criptografia de dados sensíveis em repouso quando aplicável;
- rate limiting;
- trilha de auditoria;
- backups criptografados;
- gestão de segredos;
- segregação de ambientes;
- plano de resposta a incidentes.

## Compartilhamento

- consentimento e autorização devem ser explícitos;
- convite deve expirar;
- acesso deve ser revogável;
- contratação de cuidador não implica acesso automático;
- cada ação remota deve registrar autoria;
- permissões devem ser revisáveis pelo responsável.

## Logs

Permitido:

- identificador técnico pseudonimizado;
- tipo de erro;
- versão do app;
- modelo do dispositivo;
- duração de operação.

Proibido:

- nome da pessoa;
- nome do medicamento;
- observação de cuidado;
- conteúdo de receita;
- token de autenticação;
- arquivo de backup.

## Exclusão e retenção

O backend deverá definir:

- exclusão de conta;
- exclusão de perfil cuidado;
- revogação de compartilhamento;
- retenção de auditoria legalmente justificada;
- prazo de remoção de backups;
- tratamento de dispositivos offline.

## Limite clínico

O sistema deve deixar claro que:

- não substitui orientação profissional;
- notificações podem ser afetadas pelo sistema operacional;
- não recomenda dose ou tratamento;
- informações cadastradas precisam ser conferidas pelo usuário;
- recursos clínicos futuros exigirão avaliação regulatória e especializada.

## Checklist antes do lançamento

- política de privacidade publicada;
- termos e aviso de uso;
- permissões justificadas;
- dependências auditadas;
- backup testado;
- logs revisados;
- dados de demonstração removidos;
- procedimento de reporte de vulnerabilidade;
- avaliação jurídica e de proteção de dados para a operação real.
