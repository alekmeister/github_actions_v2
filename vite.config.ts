import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	base: process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/',
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
})
