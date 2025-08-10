"use client"

import Image from "next/image"
import Link from "next/link"
import Container from "./ui/Container"
import { ShoppingCart } from "lucide-react"

type Item = {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  href?: string
}

const ITEMS: Item[] = [
  {
    id: 1,
    name: "B12 medicine",
    price: 19,
    oldPrice: 25,
    image: "/collection/c1.png",
    href: "/product/b12",
  },
  {
    id: 2,
    name: "Tonometer",
    price: 19,
    image: "/collection/c2.png",
    href: "/product/tonometer",
  },
  {
    id: 3,
    name: "ECG cardiograph",
    price: 20,
    oldPrice: 35,
    image: "/collection/c3.png",
    href: "/product/ecg",
  },
  {
    id: 4,
    name: "Blood glucose meter",
    price: 15,
    image: "/collection/c4.png",
    href: "/product/glucose-meter",
  },
  {
    id: 5,
    name: "Lab hand gloves",
    price: 20,
    oldPrice: 35,
    image: "/collection/c5.png",
    href: "/product/gloves",
  },
  {
    id: 6,
    name: "Stethoscope",
    price: 20,
    oldPrice: 35,
    image: "/collection/c6.png",
    href: "/product/stethoscope",
  },
  {
    id: 7,
    name: "Inhaler pressure drop",
    price: 35,
    image: "/collection/c7.png",
    href: "/product/inhaler",
  },
  {
    id: 8,
    name: "Multi vitamin",
    price: 20,
    image: "/collection/c8.png",
    href: "/product/multivitamin",
  },
]

export default function ExploreCollection() {
  return (
    <section className="bg-[#F4EFEA] py-14 sm:py-16">
      <Container>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-[#503217] sm:text-3xl">
            Explore Our store Collection
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((p) => (
            <article key={p.id} className="group rounded-2xl">
              {/* Kartu gambar */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E6DED5] bg-white">
                <div className="relative aspect-square w-full bg-[#FCFAF7]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-8 transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    priority={false}
                  />
                </div>

                {/* CTA muncul saat hover — kiri bawah, seperti contoh */}
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex justify-start opacity-0 translate-y-1 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link
                    href={p.href ?? "#"}
                    className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-2 text-xs font-semibold text-[#503217] ring-1 ring-[#DCCFBE] shadow-sm"
                    aria-label={`Shop ${p.name} now`}
                  >
                    <ShoppingCart size={14} />
                    <span>Shop now</span>
                  </Link>
                </div>
              </div>

              {/* Teks & harga */}
              <h3 className="mt-3 text-sm font-semibold text-[#503217]">
                {p.name}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-[13px] font-bold text-[#503217]">
                  ${p.price.toFixed(2)} USD
                </span>
                {p.oldPrice && (
                  <span className="text-xs text-[#8C7E73] line-through">
                    ${p.oldPrice.toFixed(2)} USD
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
