export const colors = {
  primary50: '#ecfeff',
  primary100: '#ccfbf1',
  primary300: '#5eead4',
  primary500: '#14b8a6',
  primary700: '#0f766e',
  primary800: '#115e59',
  infoSoft: '#ecfeff',
  info700: '#155e75',
  successSoft: '#ecfdf5',
  success700: '#047857',
  warningSoft: '#fff7ed',
  warning700: '#c2410c',
  dangerSoft: '#fef2f2',
  danger700: '#dc2626',
  surface: '#ffffff',
  surfaceMuted: '#f8fafc',
  surfaceSubtle: '#f1f5f9',
  border: '#e2e8f0',
  borderStrong: '#cbd5e1',
  textStrong: '#0f172a',
  text: '#334155',
  textMuted: '#64748b',
  textSubtle: '#94a3b8',
  textInverse: '#ffffff',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const radius = {
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  pill: 999,
} as const;

export const typography = {
  fontFamily: 'System',
  sizes: {
    xs: 13,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    title: 28,
  },
} as const;
