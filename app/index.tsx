import { Ionicons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/theme/tokens';

const todayItems = [
  {
    id: 'example-1',
    time: '08:00',
    person: 'Nenhuma pessoa cadastrada',
    medication: 'Cadastre uma pessoa e seu primeiro medicamento',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Ionicons name="heart-outline" size={28} color={colors.primary700} />
          </View>
          <View style={styles.heroText}>
            <Text style={styles.eyebrow}>NOSSO ZELO MEDICAMENTOS</Text>
            <Text style={styles.title}>Cuidados de hoje</Text>
            <Text style={styles.subtitle}>
              Organize pessoas, medicamentos e horários mesmo sem internet.
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Pressable accessibilityRole="button" style={styles.primaryButton}>
            <Ionicons name="person-add-outline" size={20} color={colors.textInverse} />
            <Text style={styles.primaryButtonText}>Cadastrar pessoa</Text>
          </Pressable>

          <Pressable accessibilityRole="button" style={styles.secondaryButton}>
            <Ionicons name="medical-outline" size={20} color={colors.primary700} />
            <Text style={styles.secondaryButtonText}>Novo medicamento</Text>
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Agenda do dia</Text>
          <View style={styles.statusPill}>
            <Text style={styles.statusPillText}>Offline</Text>
          </View>
        </View>

        {todayItems.map((item) => (
          <View key={item.id} style={styles.scheduleCard}>
            <View style={styles.timeBox}>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.scheduleContent}>
              <Text style={styles.person}>{item.person}</Text>
              <Text style={styles.medication}>{item.medication}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSubtle} />
          </View>
        ))}

        <View style={styles.infoCard}>
          <Ionicons name="shield-checkmark-outline" size={24} color={colors.success700} />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Seus dados ficam neste aparelho</Text>
            <Text style={styles.infoText}>
              O primeiro MVP usa armazenamento local. Backup e sincronização serão adicionados em uma etapa posterior.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surfaceMuted,
  },
  container: {
    padding: spacing.lg,
    gap: spacing.xl,
  },
  hero: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary100,
  },
  heroText: {
    flex: 1,
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.primary700,
    fontSize: typography.sizes.xs,
    fontWeight: '800',
    letterSpacing: 0.6,
  },
  title: {
    color: colors.textStrong,
    fontSize: typography.sizes.title,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: typography.sizes.md,
    lineHeight: 23,
  },
  actions: {
    gap: spacing.md,
  },
  primaryButton: {
    minHeight: 52,
    borderRadius: radius.lg,
    backgroundColor: colors.primary700,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  primaryButtonText: {
    color: colors.textInverse,
    fontSize: typography.sizes.md,
    fontWeight: '700',
  },
  secondaryButton: {
    minHeight: 52,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.primary300,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  secondaryButtonText: {
    color: colors.primary700,
    fontSize: typography.sizes.md,
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.textStrong,
    fontSize: typography.sizes.xl,
    fontWeight: '800',
  },
  statusPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: colors.primary100,
  },
  statusPillText: {
    color: colors.primary800,
    fontSize: typography.sizes.xs,
    fontWeight: '700',
  },
  scheduleCard: {
    minHeight: 92,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
  },
  timeBox: {
    minWidth: 58,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    alignItems: 'center',
    backgroundColor: colors.surfaceSubtle,
  },
  time: {
    color: colors.textStrong,
    fontSize: typography.sizes.md,
    fontWeight: '800',
  },
  scheduleContent: {
    flex: 1,
    gap: spacing.xs,
  },
  person: {
    color: colors.textStrong,
    fontSize: typography.sizes.md,
    fontWeight: '700',
  },
  medication: {
    color: colors.textMuted,
    fontSize: typography.sizes.sm,
    lineHeight: 20,
  },
  infoCard: {
    borderRadius: radius.xl,
    backgroundColor: colors.successSoft,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    padding: spacing.lg,
  },
  infoContent: {
    flex: 1,
    gap: spacing.xs,
  },
  infoTitle: {
    color: colors.success700,
    fontSize: typography.sizes.md,
    fontWeight: '800',
  },
  infoText: {
    color: colors.text,
    fontSize: typography.sizes.sm,
    lineHeight: 21,
  },
});
