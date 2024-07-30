import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "documentation") {
    return {
      plugins: [react()],
      build: {
        outDir: "docs",
      },
    };
  }

  return {
    plugins: [react(), dts({ include: ["lib"], outDir: "types" })],
    test: {
      environment: "jsdom",
    },
    build: {
      lib: {
        entry: resolve(__dirname, "lib/main"),
        formats: ["es"],
        fileName: "main",
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime"],
      },
    },
  };
});
