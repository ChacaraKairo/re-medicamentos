import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  personFormSchema,
  type PersonFormValues,
} from '@/features/people/person-schema';
import { colors, radius, spacing, typography } from '@/theme/tokens';

const personColors = ['#14b8a6', '#0f766e', '#155e75', '#047857', '#c2410c', '#7c3aed'];

type PersonFormProps = {
  initialValues?: PersonFormValues;
  submitLabel: string;
  onSubmit: (values: PersonFormValues) => Promise<void>;
  onArchive?: () => void;
};

const defaultValues: PersonFormValues = {
  name: '',
  birthDate: '',
  notes: '',
  color: personColors[0],
};

export function PersonForm({
  initialValues = defaultValues,
  submitLabel,
  onSubmit,
  onArchive,
}: PersonFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonFormValues>({
    resolver: zodResolver(personFormSchema),
    defaultValues: initialValues,
  });

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.intro}>
        <Text style={styles.title}>Dados da pessoa</Text>
        <Text style={styles.subtitle}>
          Apenas o nome é obrigatório. Evite cadastrar dados que não sejam necessários para o cuidado.
        </Text>
      </View>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.field}>
            <Text style={styles.label}>Nome *</Text>
            <TextInput
              accessibilityLabel="Nome da pessoa"
              autoCapitalize="words"
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Ex.: Maria da Silva"
              placeholderTextColor={colors.textSubtle}
              style={[styles.input, errors.name && styles.inputError]}
              value={value}
            />
            {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
          </View>
        )}
      />

      <Controller
        control={control}
        name="birthDate"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.field}>
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
              accessibilityLabel="Data de nascimento"
              keyboardType="numbers-and-punctuation"
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="AAAA-MM-DD"
              placeholderTextColor={colors.textSubtle}
              style={[styles.input, errors.birthDate && styles.inputError]}
              value={value}
            />
            {errors.birthDate && (
              <Text style={styles.error}>{errors.birthDate.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="color"
        render={({ field: { onChange, value } }) => (
          <View style={styles.field}>
            <Text style={styles.label}>Cor de identificação</Text>
            <View style={styles.colorRow}>
              {personColors.map((color) => (
                <Pressable
                  accessibilityLabel={`Selecionar cor ${color}`}
                  accessibilityRole="button"
                  key={color}
                  onPress={() => onChange(color)}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color },
                    value === color && styles.colorButtonSelected,
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      />

      <Controller
        control={control}
        name="notes"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.field}>
            <Text style={styles.label}>Observações gerais</Text>
            <TextInput
              accessibilityLabel="Observações gerais"
              multiline
              onBlur={onBlur}
              onChangeText={onChange}
              placeholder="Informações úteis para organizar os cuidados"
              placeholderTextColor={colors.textSubtle}
              style={[styles.input, styles.textArea, errors.notes && styles.inputError]}
              textAlignVertical="top"
              value={value}
            />
            {errors.notes && <Text style={styles.error}>{errors.notes.message}</Text>}
          </View>
        )}
      />

      <Pressable
        accessibilityRole="button"
        disabled={isSubmitting}
        onPress={handleSubmit(onSubmit)}
        style={[styles.submitButton, isSubmitting && styles.buttonDisabled]}
      >
        {isSubmitting ? (
          <ActivityIndicator color={colors.textInverse} />
        ) : (
          <Text style={styles.submitButtonText}>{submitLabel}</Text>
        )}
      </Pressable>

      {onArchive && (
        <Pressable accessibilityRole="button" onPress={onArchive} style={styles.archiveButton}>
          <Text style={styles.archiveButtonText}>Arquivar pessoa</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.xl },
  intro: { gap: spacing.sm },
  title: { color: colors.textStrong, fontSize: typography.sizes.title, fontWeight: '800' },
  subtitle: { color: colors.textMuted, fontSize: typography.sizes.sm, lineHeight: 21 },
  field: { gap: spacing.sm },
  label: { color: colors.textStrong, fontSize: typography.sizes.sm, fontWeight: '700' },
  input: {
    minHeight: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    color: colors.textStrong,
    fontSize: typography.sizes.md,
    paddingHorizontal: spacing.md,
  },
  inputError: { borderColor: colors.danger700 },
  textArea: { minHeight: 120, paddingTop: spacing.md },
  error: { color: colors.danger700, fontSize: typography.sizes.xs },
  colorRow: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  colorButton: { width: 42, height: 42, borderRadius: radius.pill },
  colorButtonSelected: { borderWidth: 4, borderColor: colors.textStrong },
  submitButton: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    backgroundColor: colors.primary700,
  },
  submitButtonText: { color: colors.textInverse, fontSize: typography.sizes.md, fontWeight: '800' },
  buttonDisabled: { opacity: 0.65 },
  archiveButton: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.danger700,
    backgroundColor: colors.surface,
  },
  archiveButtonText: { color: colors.danger700, fontSize: typography.sizes.md, fontWeight: '700' },
});
