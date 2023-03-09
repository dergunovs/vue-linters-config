import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es6",
    lib: { name: "vue-linters-config", fileName: "index", formats: ["umd"], entry: "src/index.js" },
  },
});
