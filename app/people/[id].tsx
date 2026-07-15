import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, StyleSheet } from 'react-native';

import { PersonForm } from '@/features/people/PersonForm';
import { archivePerson, getPerson, updatePerson, type PersonRecord } from '@/features/people/people-repository';
import type { PersonFormValues } from '@/features/people/person-schema';
import { colors } from '@/theme/tokens';

export default function EditPersonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [person, setPerson] = useState<PersonRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    void getPerson(id).then(setPerson).finally(() => setLoading(false));
  }, [id]);

  async function handleSubmit(values: PersonFormValues) {
    if (!id) return;
    try {
      await updatePerson(id, values);
      router.replace('/people');
    } catch (error) {
      Alert.alert('Não foi possível atualizar', error instanceof Error ? error.message : 'Tente novamente.');
    }
  }

  function handleArchive() {
    if (!id) return;
    Alert.alert('Arquivar pessoa?', 'Ela deixará de aparecer nas listas, mas o histórico será preservado.', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Arquivar',
        style: 'destructive',
        onPress: async () => {
          try {
            await archivePerson(id);
            router.replace('/people');
          } catch (error) {
            Alert.alert('Não foi possível arquivar', error instanceof Error ? error.message : 'Tente novamente.');
          }
        },
      },
    ]);
  }

  if (loading) return <ActivityIndicator style={styles.loading} color={colors.primary700} />;
  if (!person) {
    Alert.alert('Pessoa não encontrada');
    router.replace('/people');
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <PersonForm
        initialValues={{
          name: person.name,
          birthDate: person.birthDate ?? '',
          notes: person.notes ?? '',
          color: person.color,
        }}
        submitLabel="Salvar alterações"
        onSubmit={handleSubmit}
        onArchive={handleArchive}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surfaceMuted },
  loading: { flex: 1, backgroundColor: colors.surfaceMuted },
});
