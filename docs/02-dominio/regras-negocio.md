# Regras de Negócio

## Pessoas

- RN-PES-001: todo medicamento pertence a exatamente uma pessoa.
- RN-PES-002: o nome da pessoa é obrigatório.
- RN-PES-003: arquivar uma pessoa não apaga automaticamente seu histórico.
- RN-PES-004: pessoas arquivadas não aparecem na agenda padrão.
- RN-PES-005: a exclusão definitiva, quando existir, exigirá confirmação e tratamento dos dados relacionados.

## Medicamentos

- RN-MED-001: o nome do medicamento é obrigatório.
- RN-MED-002: um medicamento pode ter vários horários.
- RN-MED-003: um medicamento pausado não gera novas doses nem notificações.
- RN-MED-004: arquivar um medicamento preserva eventos anteriores.
- RN-MED-005: alterações de nome ou instrução não modificam retroativamente eventos já registrados.
- RN-MED-006: data final não pode ser anterior à data inicial.
- RN-MED-007: medicamento contínuo pode não possuir data final.

## Horários

- RN-HOR-001: cada horário pertence a um medicamento.
- RN-HOR-002: um horário deve ter hora válida e ao menos um dia da semana.
- RN-HOR-003: horários idênticos para o mesmo medicamento e dias devem ser impedidos ou explicitamente confirmados.
- RN-HOR-004: editar um horário deve cancelar a notificação anterior e criar a nova.
- RN-HOR-005: desativar um horário não remove eventos passados.

## Doses e eventos

- RN-DOS-001: cada ocorrência prevista possui identificador próprio.
- RN-DOS-002: estados possíveis: pending, taken, snoozed, skipped, late e cancelled.
- RN-DOS-003: registrar como tomada exige data efetiva.
- RN-DOS-004: adiar mantém referência à ocorrência original e cria nova previsão.
- RN-DOS-005: uma dose atrasada pode posteriormente ser marcada como tomada.
- RN-DOS-006: eventos não devem ser apagados silenciosamente; correções devem gerar atualização auditável.
- RN-DOS-007: a agenda deve considerar fuso horário e data local do dispositivo.
- RN-DOS-008: mudanças futuras no tratamento não devem reescrever o histórico passado.

## Notificações

- RN-NOT-001: notificações são locais no MVP.
- RN-NOT-002: a ausência de permissão deve ser informada claramente.
- RN-NOT-003: o aplicativo não pode afirmar garantia absoluta de entrega.
- RN-NOT-004: cada agendamento deve guardar o identificador retornado pela plataforma.
- RN-NOT-005: pausar ou arquivar deve cancelar notificações futuras relacionadas.
- RN-NOT-006: na inicialização, o aplicativo deve reconciliar banco e agendamentos quando necessário.

## Backup

- RN-BKP-001: o backup deve possuir versão de formato.
- RN-BKP-002: importações incompatíveis devem ser recusadas sem alterar os dados atuais.
- RN-BKP-003: o arquivo não deve incluir segredos de infraestrutura.
- RN-BKP-004: a importação deve ocorrer em transação.
- RN-BKP-005: antes de substituir dados, deve existir confirmação explícita.

## Sincronização futura

- RN-SYN-001: todas as entidades sincronizáveis usarão UUID.
- RN-SYN-002: registros terão created_at, updated_at e deleted_at quando aplicável.
- RN-SYN-003: exclusão sincronizável será inicialmente lógica.
- RN-SYN-004: alterações locais serão registradas em fila.
- RN-SYN-005: falha de sincronização não pode impedir o uso offline.
