# Design System

## Origem

O aplicativo deve compartilhar a identidade visual do Nosso Zelo, adaptada para uso mobile e acessível.

## Cores

### Primárias

```text
primary-50   #ecfeff
primary-100  #ccfbf1
primary-300  #5eead4
primary-500  #14b8a6
primary-700  #0f766e
primary-800  #115e59
```

### Superfícies

```text
surface          #ffffff
surface-muted    #f8fafc
surface-subtle   #f1f5f9
border           #e2e8f0
border-strong    #cbd5e1
```

### Texto

```text
text-strong   #0f172a
text          #334155
text-muted    #64748b
text-subtle   #94a3b8
text-inverse  #ffffff
```

### Semânticas

```text
success       #047857
warning       #c2410c
danger        #dc2626
info          #155e75
```

Estados de dose não devem depender somente das cores; devem possuir texto e ícone.

## Tipografia

Família preferencial: Inter. Fallback: fonte do sistema.

Escala sugerida:

- display: 28/34, semibold;
- title: 24/30, semibold;
- heading: 20/26, semibold;
- body: 16/24, regular;
- body-small: 14/20;
- caption: 13/18.

## Espaçamento

Base de 4 pontos:

```text
4, 8, 12, 16, 20, 24, 32, 40, 48
```

## Raios

- small: 6;
- medium: 8;
- large: 12;
- extra-large: 16;
- modal: 20;
- pill: 999.

## Componentes iniciais

- ZeloButton;
- ZeloIconButton;
- ZeloTextField;
- ZeloTextArea;
- ZeloSelect;
- ZeloCard;
- ZeloPersonCard;
- ZeloMedicationCard;
- ZeloDoseCard;
- ZeloStatusBadge;
- ZeloAvatar;
- ZeloHeader;
- ZeloBottomSheet;
- ZeloDialog;
- ZeloEmptyState;
- ZeloFeedbackBanner.

## Botões

Variantes:

- primary;
- secondary;
- ghost;
- danger.

Estados:

- normal;
- pressed;
- focused;
- disabled;
- loading.

## Ícones

Usar uma biblioteca consistente, preferencialmente Lucide. Ícones devem acompanhar texto em ações críticas.

## Tom visual

- acolhedor, não infantil;
- profissional, não hospitalar;
- simples, sem excesso de elementos;
- cartões claros e hierarquia forte;
- foco na próxima ação necessária.
