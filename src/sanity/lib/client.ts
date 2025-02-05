// import { createClient } from 'next-sanity'
import { createClient } from '@sanity/client'


// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "kterkpkl",
  dataset: "production",
  apiVersion: "2025-01-15",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"sktTyc050kFwYI0oZukyg4uQwEmiqeI1wmeiaBnyiH5PAZGw7hCrFvjeNMfmi5omC3dOZab6qgasJiiEhECoTAjG2SXePZGAPSXCcdISDY7FVMpqC1LrJNoBeftrQIzaGWbw26Y3AePXeVB6Eto8Jqz9xU8PIPW77ictrTYiw0b2SRRC4EYW",
})
