import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "cpe.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (0 !== child_process.spawnSync('dotnet', [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
    ], { stdio: 'inherit', }).status) {
        throw new Error("Could not create certificate.");
    }
}

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7150';

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
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            proxy: {
                '^/api/': {
                    target,
                    secure: false,
                    configure: (proxy) => {
                        proxy.on('proxyReq', (_proxyReq, req, res) => {
                            console.log('Sending Request to the Target:', req.method, req.url, res.statusCode);
                        });
                    }
                }
            },
            port: 5173,
            https: {
                key: fs.readFileSync(keyFilePath),
                cert: fs.readFileSync(certFilePath),
            },
            fs: {
                allow: ['..']
            }
        }
    }
})
