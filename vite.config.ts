import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    process.env = loadEnv(mode, process.cwd(), '')

    const VITE_API_ENDPOINT_URL = process.env.VITE_API_ENDPOINT_URL

    if (VITE_API_ENDPOINT_URL == null) {
      throw new Error('VITE_API_ENDPOINT_URL need to be defined')
    }

    return {
        plugins: [
            vue({
                template: { transformAssetUrls }
            }),
            quasar({
                sassVariables: '/src/quasar-variables.sass'
            }),
            VitePWA({
                registerType: 'autoUpdate',
                /* Uncomment to enable PWA in development */
                /*devOptions: { enabled: true }*/
            }),
            basicSsl()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            port: 5173,
            https: {
                
            },
            fs: {
                allow: ['..']
            }
        }
    }
})
