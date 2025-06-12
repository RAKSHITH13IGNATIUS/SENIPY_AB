// components/Banner.tsx
import React from "react"
import posthog from "@/lib/posthog"

type BannerProps = {
  variant: "A" | "B"
}

const Banner: React.FC<BannerProps> = ({ variant }) => {
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    posthog.capture("banner_variant_shown", { variant })
  }, [variant])

  if (variant === "A" || !visible) return null

  return (
    <div className="bg-blue-600 text-white px-4 py-2 text-center text-sm font-medium">
      🎉 Now live: SENIPY AI Beta — Try it free!
      <button onClick={() => setVisible(false)} className="ml-4 underline">
        Dismiss
      </button>
    </div>
  )
}

export default Banner
