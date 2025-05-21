import { useRoute } from "vue-router"
export const useSeoMetaFromDoc = (doc: any) => {
  const { site } = useAppConfig()
  const title = doc?.title ?? "FishtVue"
  const description = doc?.description ?? "Documentation for FishtVue UI components."
  const image = `https://fishtvue-sandbox-nuxt.vercel.app${doc?.image ?? "/og/banner.png"}`
  // const lang = "en"
  const url = `https://fishtvue-sandbox-nuxt.vercel.app${useRoute().fullPath}`

  useHead({
    title: title ?? site.title,
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    link: [{ rel: "canonical", href: url }]
  })
}
