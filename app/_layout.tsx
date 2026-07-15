import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/theme/tokens';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.primary700,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.surfaceMuted },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Nosso Zelo' }} />
      </Stack>
    </>
  );
}
