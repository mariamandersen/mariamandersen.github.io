import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
export default defineConfig({plugins:[react(),tailwind()],publicDir:false,build:{outDir:'.build',assetsDir:'assets/portfolio',emptyOutDir:true}});
