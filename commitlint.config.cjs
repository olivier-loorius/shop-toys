/** Commitlint — on autorise seulement 'feat' et 'wip' (pour l'instant) */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'wip']],
    'scope-case': [2, 'always', ['kebab-case', 'lower-case']],
    'subject-case': [0], // pas de forçage sur l'accentuation FR
    'subject-empty': [2, 'never']
  }
};
