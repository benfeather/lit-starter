import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
})
