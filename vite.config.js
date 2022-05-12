import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // build: {
  //   sourcemap: true // 生成 sourcemap
  // },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    })],
  server: {
    proxy: {
      '/api': {
        target: 'http://47.107.78.74:99',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/other': {
        target: 'http://47.107.78.74:99',
        changeOrigin: true,
      }
    }
  },
	esbuild: {
		pure: ["console.log"],
		minify: true,
	}
});
