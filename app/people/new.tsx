import { router } from 'expo-router';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';

import { PersonForm } from '@/features/people/PersonForm';
import { createPerson } from '@/features/people/people-repository';
import type { PersonFormValues } from '@/features/people/person-schema';
import { colors } from '@/theme/tokens';

export default function NewPersonScreen() {
  async function handleSubmit(values: PersonFormValues) {
    try {
      await createPerson(values);
      router.replace('/people');
    } catch (error) {
      Alert.alert('Não foi possível salvar', error instanceof Error ? error.message : 'Tente novamente.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <PersonForm submitLabel="Salvar pessoa" onSubmit={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.surfaceMuted } });
