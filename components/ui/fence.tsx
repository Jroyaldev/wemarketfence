import * as React from "react"
import type { SVGProps } from "react"

interface SVGRProps {
  title?: string
  titleId?: string
}

const Fence = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement> & SVGRProps>(
  ({ title, titleId, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={ref}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M4 5v14M20 5v14M14 5v14M1 5h22M1 19h22" />
    </svg>
  ),
)
Fence.displayName = "Fence"

export { Fence }

