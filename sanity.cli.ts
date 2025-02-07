import { defineCliConfig } from 'sanity/cli'

// Environment variables se project ID aur dataset read karte hain.
// Agar environment variables set na hon, to fallback values use hongi.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id_here'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineCliConfig({
  api: { 
    projectId, 
    dataset 
  }
})
