import { createClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const productsClient = createClient({
    projectId: process.env.SANITY_PRODUCTS_PROJECT_ID || 'your-products-project-id',
    dataset: process.env.SANITY_PRODUCTS_DATASET || 'production',
    apiVersion: config.public.sanity?.apiVersion || '2024-01-01',
    useCdn: true,
  })

  return {
    provide: {
      productsClient
    }
  }
})
