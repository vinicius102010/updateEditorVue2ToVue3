// vite.config.lib.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        vue({
            customElement: true,
        }),
    ],
    build: {
        target: 'es2015',
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: 'MyTwoButtons',
            formats: ['es', 'umd'],
            fileName: (format) => `my-two-buttons.${format}.js`,
        },
    },
});