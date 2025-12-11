import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: "8z11fhz5",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
})
