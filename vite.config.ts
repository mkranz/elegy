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
                devOptions: { enabled: false },
                includeAssets: ['favicon.ico', 'favicon.svg', 'favicon-96x96.png', 'apple-touch-icon.png', 'mask-icon.svg'],
                workbox: {
                    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,json,wasm}']
                },
                manifest: {
                    name: 'Elegy Character Sheet',
                    short_name: 'Elegy',
                    description: 'Character sheet for Elegy',
                    theme_color: '#8b0000',
                    background_color: '#8b0000',
                    icons: [
                        {
                            src: "/web-app-manifest-192x192.png",
                            sizes: "192x192",
                            type: "image/png",
                            purpose: "any maskable"
                        },
                        {
                            src: "/web-app-manifest-512x512.png",
                            sizes: "512x512",
                            type: "image/png",
                            purpose: "any maskable"
                        }
                    ]
                }
            }),
            /*https disabled for local development so we can test the PWA*/
            /*basicSsl()*/
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            port: 5173,
            /*https disabled for local development so we can test the PWA*/
            /*https: {},*/
            fs: {
                allow: ['..']
            }
        }
    }
})
