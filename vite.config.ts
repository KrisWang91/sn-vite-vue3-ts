import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  '@': pathResolve('src'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias,
  },
})
