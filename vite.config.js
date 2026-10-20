import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 47221,
    strictPort: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 47221,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        privacidad: resolve(root, "privacidad/index.html"),
        condiciones: resolve(root, "condiciones/index.html"),
        eliminacion: resolve(root, "eliminacion/index.html"),
      },
    },
  },
});
