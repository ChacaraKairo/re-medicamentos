import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { initializeDatabase } from '@/database/client';
import { colors } from '@/theme/tokens';

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void initializeDatabase().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.primary700} size="large" />
      </View>
    );
  }

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
        <Stack.Screen name="people/index" options={{ title: 'Pessoas' }} />
        <Stack.Screen name="people/new" options={{ title: 'Cadastrar pessoa' }} />
        <Stack.Screen name="people/[id]" options={{ title: 'Editar pessoa' }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceMuted,
  },
});
