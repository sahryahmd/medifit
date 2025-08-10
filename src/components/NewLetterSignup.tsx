"use client"

import Image from "next/image"
import Container from "./ui/Container"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <section className="relative bg-[#F4EFEA] py-14 sm:py-16">
      {/* doodles kecil kanan bawah (opsional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-4 h-32 w-32 opacity-40"
        style={{
          backgroundImage: "url(/hero/doodles.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT: image card */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/newsletter/discount.png" // <<< taruh gambar di sini
              alt="Join newsletter"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>

          {/* RIGHT: newsletter card */}
          <div className="rounded-2xl border border-[#E6DED5] bg-[#F7F5F0] p-6 sm:p-8">
            <p className="text-center text-xs font-medium text-[#6B5E55]">
              Join our newsletter
            </p>
            <h3 className="mt-2 text-center text-2xl font-extrabold leading-snug text-[#503217] sm:text-3xl">
              Sign Up for an Instant
              <br className="hidden sm:block" /> 15% Discount
            </h3>

            <form
              className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7B6D62]"
                />
                <input
                  type="email"
                  required
                  placeholder="Enter Email"
                  className="w-full rounded-full border border-[#D9CBBE] bg-white pl-9 pr-4 py-2 text-sm text-[#503217] placeholder-[#8C7E73] outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#503217] px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#503217]"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
