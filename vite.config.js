import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    lib: { name: 'vue-linters-config', fileName: 'index', formats: ['es'], entry: 'src/index.js' },
  },
});
