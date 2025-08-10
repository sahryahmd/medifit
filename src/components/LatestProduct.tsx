"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import Container from "./ui/Container"

type Product = {
  id: number
  name: string
  price: number
  oldPrice?: number
  discountLabel?: string // contoh: "Save 10%"
  isNew?: boolean
  image: string
  href?: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Microscope",
    price: 45.0,
    isNew: true,
    image: "/products/prod1.jpg",
    href: "/product/microscope",
  },
  {
    id: 2,
    name: "Pulse oximeter",
    price: 19.0,
    oldPrice: 25.0,
    discountLabel: "Save 10%",
    image: "/products/prod2.jpg",
    href: "/product/pulse-oximeter",
  },
  {
    id: 3,
    name: "Vitamin serum",
    price: 20.0,
    oldPrice: 30.0,
    image: "/products/prod3.jpg",
    href: "/product/vitamin-serum",
  },
  {
    id: 4,
    name: "High protein",
    price: 50.0,
    isNew: true,
    image: "/products/prod4.jpg",
    href: "/product/high-protein",
  },
]

export default function LatestProducts() {
  return (
    <section id="latest" className="bg-[#F4EFEA] py-14 sm:py-16">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#503217] sm:text-3xl">
            Latest health product
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="
                group relative rounded-2xl border border-[#E6DED5] bg-white p-3
                transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              "
            >
              {/* badge: New / Save */}
              {(p.isNew || p.discountLabel) && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#EABF9F] px-2 py-1 text-xs font-semibold text-[#503217] shadow-sm">
                  {p.isNew ? "New" : p.discountLabel}
                </span>
              )}

              {/* image area */}
              <div className="relative mb-3 overflow-hidden rounded-xl bg-[#FCFAF7]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* hover CTA: muncul di bawah seperti contoh */}
                <div
                  className="
                    pointer-events-none absolute inset-x-3 bottom-3
                    flex justify-center opacity-0 transition duration-300
                    group-hover:opacity-100
                  "
                >
                  <Link
                    href={p.href ?? "#"}
                    className="
                      pointer-events-auto inline-flex items-center gap-2
                      rounded-full bg-[#E9DFCFFF] px-4 py-2 text-xs font-semibold
                      text-[#503217] shadow ring-1 ring-[#DCCFBE]
                    "
                    aria-label={`Shop ${p.name} now`}
                  >
                    <ShoppingCart size={14} />
                    <span>Shop now</span>
                  </Link>
                </div>
              </div>

              {/* title */}
              <h3 className="text-sm font-semibold text-[#503217]">{p.name}</h3>

              {/* price */}
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[15px] font-bold text-[#503217]">
                  ${p.price.toFixed(2)} USD
                </span>
                {p.oldPrice && (
                  <span className="text-sm text-[#8C7E73] line-through">
                    ${p.oldPrice.toFixed(2)} USD
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
