import { Ionicons } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { listPeople, type PersonRecord } from '@/features/people/people-repository';
import { colors, radius, spacing, typography } from '@/theme/tokens';

export default function PeopleScreen() {
  const [people, setPeople] = useState<PersonRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPeople = useCallback(async () => {
    setLoading(true);
    try { setPeople(await listPeople()); } finally { setLoading(false); }
  }, []);

  useFocusEffect(useCallback(() => { void loadPeople(); }, [loadPeople]));

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable style={styles.addButton} onPress={() => router.push('/people/new')}>
          <Ionicons name="person-add-outline" size={20} color={colors.textInverse} />
          <Text style={styles.addButtonText}>Cadastrar pessoa</Text>
        </Pressable>

        {loading ? (
          <ActivityIndicator color={colors.primary700} />
        ) : people.length === 0 ? (
          <View style={styles.emptyCard}>
            <Ionicons name="people-outline" size={36} color={colors.primary700} />
            <Text style={styles.emptyTitle}>Nenhuma pessoa cadastrada</Text>
            <Text style={styles.emptyText}>Cadastre a primeira pessoa para organizar seus medicamentos e horários.</Text>
          </View>
        ) : (
          people.map((person) => (
            <Pressable key={person.id} style={styles.personCard} onPress={() => router.push(`/people/${person.id}`)}>
              <View style={[styles.avatar, { backgroundColor: person.color }]}>
                <Text style={styles.avatarText}>{person.name.slice(0, 1).toUpperCase()}</Text>
              </View>
              <View style={styles.personInfo}>
                <Text style={styles.personName}>{person.name}</Text>
                <Text style={styles.personDetail}>{person.birthDate || 'Data de nascimento não informada'}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
            </Pressable>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.surfaceMuted },
  container: { padding: spacing.lg, gap: spacing.md },
  addButton: { minHeight: 52, borderRadius: radius.lg, backgroundColor: colors.primary700, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  addButtonText: { color: colors.textInverse, fontSize: typography.sizes.md, fontWeight: '800' },
  emptyCard: { marginTop: spacing.xl, padding: spacing.xl, borderRadius: radius.xl, backgroundColor: colors.surface, alignItems: 'center', gap: spacing.md, borderWidth: 1, borderColor: colors.border },
  emptyTitle: { color: colors.textStrong, fontSize: typography.sizes.lg, fontWeight: '800', textAlign: 'center' },
  emptyText: { color: colors.textMuted, fontSize: typography.sizes.sm, lineHeight: 21, textAlign: 'center' },
  personCard: { minHeight: 78, padding: spacing.md, borderRadius: radius.xl, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  avatar: { width: 48, height: 48, borderRadius: radius.pill, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.textInverse, fontSize: typography.sizes.xl, fontWeight: '800' },
  personInfo: { flex: 1, gap: spacing.xs },
  personName: { color: colors.textStrong, fontSize: typography.sizes.md, fontWeight: '800' },
  personDetail: { color: colors.textMuted, fontSize: typography.sizes.sm },
});
