import path from 'node:path';

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['cjs'],
      fileName: () => 'extension.js',
    },
    rollupOptions: {
      external: [
        'vscode',
        'vscode-languageclient',
        'vscode-languageclient/node',
        /^node:/,
      ],
    },
    outDir: 'out',
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
  },
});
