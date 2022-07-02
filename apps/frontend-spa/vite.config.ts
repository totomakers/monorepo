import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import linaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		linaria({
			sourceMap: process.env.NODE_ENV !== 'production',
		}),
	],
	server: {
		port: 3001,
	},
});
