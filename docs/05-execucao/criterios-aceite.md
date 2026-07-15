# Critérios de Aceite do MVP

## Pessoas

- cadastrar pessoa com nome;
- impedir salvamento sem nome;
- editar dados preservando vínculos;
- arquivar sem apagar histórico;
- alternar entre pessoas sem misturar medicamentos.

## Medicamentos

- cadastrar medicamento para a pessoa correta;
- aceitar múltiplos horários;
- validar período;
- editar sem duplicar horários ou notificações;
- pausar e cancelar próximos agendamentos;
- arquivar preservando eventos passados.

## Agenda

- ordenar ocorrências por horário;
- filtrar por pessoa;
- exibir estados de maneira textual e visual;
- marcar tomada com horário efetivo;
- adiar mantendo referência à ocorrência original;
- registrar dose atrasada posteriormente;
- não duplicar ocorrência ao reabrir o app.

## Notificações

- solicitar permissão de forma contextual;
- criar notificação para horário ativo;
- mostrar pessoa, medicamento e instrução essencial;
- cancelar quando horário for removido;
- recriar corretamente após alteração;
- informar quando permissão estiver bloqueada.

## Persistência

- manter dados após reiniciar aplicativo;
- aplicar migração em banco existente;
- impedir registros órfãos;
- executar operações compostas em transação.

## Backup

- gerar arquivo com versão;
- restaurar em instalação limpa;
- recusar arquivo inválido sem perder dados;
- confirmar antes de substituir conteúdo;
- restaurar pessoas, medicamentos, horários e histórico.

## Usabilidade

- fluxos principais utilizáveis com leitor de tela;
- botões com área de toque adequada;
- erros explicam como corrigir;
- ações destrutivas exigem confirmação;
- nenhuma informação depende exclusivamente de cor.

## Qualidade técnica

- lint passando;
- typecheck passando;
- testes automatizados passando;
- build Android concluído;
- build iOS configurado;
- nenhuma credencial versionada;
- documentação compatível com a implementação.
