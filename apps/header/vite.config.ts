import preact from '@preact/preset-vite';
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgLoader from 'vite-svg-loader';

const isDev = process.env['NODE_ENV'] === 'development';
const exposedEnvironmentVariables = ['NODE_ENV'];

export default defineConfig({
  base: '/',

  plugins: [
    commonjs(),
    preact(),
    svgLoader(),
    EnvironmentPlugin(exposedEnvironmentVariables),
    createHtmlPlugin({
      template: isDev ? 'index.html' : 'public/index.html',
    }),
  ],

  build: {
    target: 'es2022',
    sourcemap: isDev,
    rollupOptions: {
      input: 'src/main.tsx',
      // Externalize deps that shouldn't be bundled into the micro-frontend
      external: ['preact', 'preact/compat'],
      output: {
        globals: {
          react: 'react',
          preact: 'preact',
        },
        entryFileNames: '[name].js',
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'framework') {
            return '[name].js';
          }

          return '[name]-[hash].js';
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index.css') {
            return '[name].css';
          }

          return 'assets/[name]-[hash].[ext]';
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Return
        manualChunks(id) {
          if (id.includes('node_modules/preact')) {
            return 'framework';
          }

          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    commonjsOptions: {
      exclude: [/node_modules/],
    },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
