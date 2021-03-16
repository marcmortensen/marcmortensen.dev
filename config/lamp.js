const { colors } = require('./tailwindColors.config');

export const LampTypes = {
  GOOD: { color: colors.LAMP_TYPE_GOOD, id: 'good' },
  BAD: { color: colors.LAMP_TYPE_BAD, id: 'bad' },
  NEUTRAL: { color: colors.LAMP_TYPE_NEUTRAL, id: 'neutral' },
};
