import react from '@vitejs/plugin-react';
import nesting from 'postcss-nesting';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import path from 'path';
import commonjs from 'vite-plugin-commonjs';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    base: '',
    resolve: {
        alias: {
            // '@modules': path.resolve(__dirname, 'app/02-modules'),
            
        }
    },
    
    plugins: [
        commonjs(),
        /** Polyfills for node API used by legacy dependancies (uuid, lodash) */
        nodePolyfills(),
        react({
            babel: {
                plugins: [
                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                    ['@babel/plugin-proposal-class-properties', { loose: true }]
                ]
            }
        }),
        checker({
            /*typescript: true*/
        })
    ],
    css: {
        postcss: { plugins: [nesting()] },
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'slash-div']
            }
        }
    },
    build: {
        manifest: true,
        emptyOutDir: true,
        chunkSizeWarningLimit: 5000,
        commonjsOptions: {
            transformMixedEsModules: true
        },
    },
    server: {
        port: 3001,
        strictPort: true,
        /** Authorize Google Maps API calls. */
        cors: true,
    }
});
