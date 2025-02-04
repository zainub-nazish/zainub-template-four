import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "kterkpkl",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
