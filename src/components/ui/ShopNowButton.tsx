"use client"
import { ShoppingCart } from "lucide-react"

type Props = {
  href?: string
  children?: React.ReactNode
}

export default function ShopNowButton({
  href = "#categories",
  children = "Shop now",
}: Props) {
  return (
    <a
      href={href}
      aria-label="Shop now"
      className="
        inline-flex items-center gap-2 rounded-full
        bg-[#503217] text-white text-sm font-semibold
        h-10 px-4
        shadow-[0_6px_20px_rgba(80,50,23,0.25)]
        ring-1 ring-black/5
        transition
        hover:opacity-90 active:translate-y-[1px]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#503217]
      "
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
        <ShoppingCart size={16} className="text-white" />
      </span>
      <span>{children}</span>
    </a>
  )
}
