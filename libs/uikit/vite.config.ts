import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import typescript from '@rollup/plugin-typescript';
import linaria from 'vite-plugin-linaria';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		typescript(),
		react(),
		linaria({
			sourceMap: false,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.ts'),
			name: 'uikit',
			fileName: (format) => `uikit.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
