/// <reference types="node" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            react: path.resolve(process.cwd(), './node_modules/react'),
            'react-dom': path.resolve(process.cwd(), './node_modules/react-dom'),
            '@ton/core': path.resolve(process.cwd(), './node_modules/@ton/core'),
            '@ton/crypto': path.resolve(process.cwd(), './node_modules/@ton/crypto'),
            '@ton/ton': path.resolve(process.cwd(), './node_modules/@ton/ton'),
            'react-router-dom': path.resolve(process.cwd(), './node_modules/react-router-dom'),
            'styled-components': path.resolve(process.cwd(), './node_modules/styled-components'),
            'react-i18next': path.resolve(process.cwd(), './node_modules/react-i18next'),
            '@tanstack/react-query': path.resolve(process.cwd(), './node_modules/@tanstack/react-query')
        }
    }
});
