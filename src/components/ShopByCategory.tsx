"use client"

import Link from "next/link"
import Container from "./ui/Container"
import {
  Pill,
  HeartPulse,
  Sparkles,
  Dumbbell,
  FlaskConical,
  Stethoscope,
  ShoppingBag,
  Eye,
} from "lucide-react"

type Category = {
  slug: string
  name: string
  count?: number
  icon: React.ReactNode
}

const CATEGORIES: Category[] = [
  { slug: "medicine", name: "Medicine", count: 32, icon: <Pill size={22} /> },
  {
    slug: "health-care",
    name: "Health care",
    count: 20,
    icon: <HeartPulse size={22} />,
  },
  {
    slug: "beauty",
    name: "Beauty care",
    count: 30,
    icon: <Sparkles size={22} />,
  },
  { slug: "fitness", name: "Fitness", count: 25, icon: <Dumbbell size={22} /> },
  {
    slug: "lab",
    name: "Lab equipment",
    count: 28,
    icon: <FlaskConical size={22} />,
  },
  {
    slug: "medkits",
    name: "Medkits",
    count: 25,
    icon: <Stethoscope size={22} />,
  },
]

type Highlight = {
  label: string
  title: string
  cta: "shop" | "discover"
  href: string
  image: string // /public/promos/*.png
}

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Sanitizer",
    title: "Hand sanitizer collection",
    cta: "shop",
    href: "/collection/sanitizer",
    image: "/promos/sanitizer.png",
  },
  {
    label: "Top deals",
    title: "Face wash sale collection",
    cta: "discover",
    href: "/collection/face-wash",
    image: "/promos/facewash.png",
  },
  {
    label: "Face mask",
    title: "Facial mask deals save up to 50%",
    cta: "discover",
    href: "/collection/face-mask",
    image: "/promos/facemask.png",
  },
]

function HighlightCard({ h }: { h: Highlight }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl border border-[#E6DED5] bg-white p-5
        transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
      "
    >
      {/* dekor blobs */}
      <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#F4EFEA] opacity-70" />
      <div className="pointer-events-none absolute -right-6 top-6 h-24 w-24 rounded-full bg-[#F4EFEA] opacity-60" />
      {/* notch bawah */}
      <div className="pointer-events-none absolute -bottom-5 left-1/2 h-10 w-20 -translate-x-1/2 rounded-full bg-[#F4EFEA]" />

      {/* label */}
      <span className="inline-block rounded-md bg-[#E8BFA1] px-3 py-1 text-xs font-semibold text-[#503217]">
        {h.label}
      </span>

      {/* content */}
      <div className="mt-3 flex items-center gap-4">
        {/* teks + CTA */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-semibold leading-snug text-[#503217]">
            {h.title}
          </h3>

          <Link
            href={h.href}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#503217]"
          >
            {h.cta === "shop" ? <ShoppingBag size={16} /> : <Eye size={16} />}
            <span>{h.cta === "shop" ? "Shop now" : "Discover now"}</span>
          </Link>

          {/* underline dekor seperti desain */}
          <div className="mt-1 h-[2px] w-24 bg-[#503217]/30" />
        </div>

        {/* gambar kanan */}
        <div className="relative h-24 w-28 shrink-0 sm:h-28 sm:w-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={h.image}
            alt={h.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default function ShopByCategory() {
  return (
    <section id="categories" className="bg-[#F4EFEA] py-14 sm:py-16">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#503217] sm:text-3xl">
            Shop by Category
          </h2>
        </div>

        {/* Grid kategori */}
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/shop/${c.slug}`}
                className="
                  group block rounded-2xl border border-[#E6DED5]
                  bg-[#FCFAF7] p-5 text-center
                  transition hover:-translate-y-0.5 hover:shadow-sm
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#CDBEAE]
                "
                aria-label={`Open ${c.name} category`}
              >
                <div
                  className="
                    mx-auto mb-3 grid h-12 w-12 place-items-center
                    rounded-full bg-white shadow-sm ring-1 ring-black/5
                    text-[#503217]
                  "
                >
                  <span className="[&>*]:stroke-[1.75]">{c.icon}</span>
                </div>
                <div className="text-sm font-semibold text-[#503217]">
                  {c.name}
                </div>
                {typeof c.count === "number" && (
                  <div className="mt-1 text-xs text-[#8C7E73]">
                    {c.count} items
                  </div>
                )}
                <span className="mt-3 inline-block text-xs font-medium text-[#8C7E73] opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Promo row (mirip screenshot) */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={i} h={h} />
          ))}
        </div>
      </Container>
    </section>
  )
}
