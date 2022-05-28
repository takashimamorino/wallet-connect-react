import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NodeGlobalsPolyfillPlugin from "@esbuild-plugins/node-globals-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		global: "globalThis",
		"process.env": {},
	},
	plugins: [
		react(),
		NodeGlobalsPolyfillPlugin({
			buffer: true,
		}),
	],
	optimizeDeps: {
		esbuildOptions: {
			define: { global: "globalThis" },
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
				}),
			],
		},
	},
});
