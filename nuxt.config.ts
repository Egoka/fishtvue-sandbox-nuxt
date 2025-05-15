// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: ["fishtvue/module"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    build: {
      sourcemap: false
    }
  },
  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true
    }
  }
})
