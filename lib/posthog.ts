// utils/posthog.ts
import posthog from 'posthog-js'

let isInitialized = false

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !isInitialized) {
    posthog.init('phc_w3begGmT4wIwLBViukySb4oY1vE3qxthU52tpYOFcpK', {
      api_host: 'https://app.posthog.com',
      autocapture: true,
      capture_pageview: true, // Optional: log initial page view
      loaded: (ph) => {
        console.log('✅ PostHog initialized, distinctId:', ph.get_distinct_id())
      },
    })
    isInitialized = true
  }
}

export default posthog

