/// <reference types="vitest" />

import { defineConfig } from "vite"
import  react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./app/setupTests.ts"],
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./app")}]
    }
})