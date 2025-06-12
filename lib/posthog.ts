import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_w3begGmT4wIwLBViukySb4oY1vE3qxthU52tpYOFcpK', {
      api_host: 'https://app.posthog.com', // or your self-hosted instance
      autocapture: true,
    })
  }
}

export default posthog
