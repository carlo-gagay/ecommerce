import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        svgLoader()
    ],
    resolve: {
        alias: {
            '@layouts': fileURLToPath(new URL('./resources/js/Layouts', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/Components', import.meta.url)),
            '@icons': fileURLToPath(new URL('./resources/assets/icons', import.meta.url)),
        }
    }
});
