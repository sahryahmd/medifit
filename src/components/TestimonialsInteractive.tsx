"use client"

import { useState, KeyboardEvent } from "react"
import Image from "next/image"
import Container from "./ui/Container"
import { Quote } from "lucide-react"

type Testi = {
  id: number
  name: string
  role: string
  avatar: string
  quote: string
}

const TESTIMONIALS: Testi[] = [
  {
    id: 1,
    name: "James Wilson",
    role: "Manager",
    avatar: "/testimonials/t1.png",
    quote:
      "I'm so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything I needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful.",
  },
  {
    id: 2,
    name: "Henry Adams",
    role: "CEO",
    avatar: "/testimonials/t2.png",
    quote:
      "Great experience overall. Quality is consistent and pricing is fair. Customer support responded quickly and resolved my request the same day.",
  },
  {
    id: 3,
    name: "Ethan Harris",
    role: "Business manager",
    avatar: "/testimonials/t3.png",
    quote:
      "Fast delivery and clean packaging. The site is easy to navigate and checkout is smooth. Will definitely reorder.",
  },
  {
    id: 4,
    name: "Lily Baker",
    role: "Product manager",
    avatar: "/testimonials/t4.png",
    quote:
      "Products matched the descriptions and the warranty process was straightforward. Highly recommended.",
  },
]

export default function TestimonialsInteractive() {
  const [active, setActive] = useState<number>(0)

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setActive(i)
    }
    if (e.key === "ArrowRight") setActive((p) => (p + 1) % TESTIMONIALS.length)
    if (e.key === "ArrowLeft")
      setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[active]

  return (
    <section className="bg-[#F4EFEA] py-14 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-[#503217] sm:text-3xl">
          Our happy clients
        </h2>

        {/* Quote card */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#E6DED5] bg-white/70 p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
          <div className="relative">
            {/* quotation mark */}
            <Quote
              size={20}
              className="absolute -left-2 -top-2 text-[#E0D6C9]"
              aria-hidden="true"
            />
            <p className="text-center text-[#6B5E55]">{t.quote}</p>
          </div>
        </div>

        {/* Selectors */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-4">
          {TESTIMONIALS.map((item, i) => {
            const selected = i === active
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                aria-pressed={selected}
                aria-label={`Show testimonial from ${item.name}`}
                className={[
                  "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#CDBEAE]",
                  selected
                    ? "border-[#CDBEAE] bg-white shadow-sm"
                    : "border-[#E6DED5] bg-[#FCFAF7] hover:border-[#D7CBBB]",
                ].join(" ")}
              >
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div
                    className={
                      "truncate text-sm font-semibold " +
                      (selected ? "text-[#503217]" : "text-[#503217]")
                    }
                  >
                    {item.name}
                  </div>
                  <div className="truncate text-xs text-[#8C7E73]">
                    {item.role}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
