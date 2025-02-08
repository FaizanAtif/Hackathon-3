export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

// Agar environment variable defined nahin hai to 'production' default value use hogi.
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'hcaqqj2i'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
