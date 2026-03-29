export const LANGUAGE_ID = 'polishc';

export const CLANGD_CLIENT_ID = 'polishc-clangd';
export const CLANGD_CLIENT_NAME = 'Polish C (clangd)';
export const CLANGD_FILE_WATCHER = '**/*.{c,h,pc}';
export const CLANGD_CANDIDATES = [
  'clangd',
  'clangd-18',
  'clangd-17',
  'clangd-16',
];

export const TYPE_MAP: [RegExp, string][] = [
  [/\blong long\b/g, 'długa długa'],
  [/\blong\b/g, 'długa'],
  [/\bint\b/g, 'calkowita'],
  [/\bfloat\b/g, 'zmiennoprzecinkowa'],
  [/\bdouble\b/g, 'zmiennoprzecinkowaalewiększa'],
  [/\bchar\b/g, 'znak'],
  [/\bvoid\b/g, 'nic'],
  [/\bbool\b/g, 'prawdaczyfalsz'],
];

export const REPO_RAW =
  'https://raw.githubusercontent.com/npc-tom/polishc/main';
export const HEADERS = ['polishc.h', 'polishc_stdio.h', 'polishc_diacritics.h'];
