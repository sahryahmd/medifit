import Link from "next/link"
import Container from "./ui/Container"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-[#E6DED5] bg-[#F4EFEA]">
      {/* dekor doodles opsional */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-full w-24 opacity-30 max-sm:hidden"
        style={{
          backgroundImage: "url(/hero/doodles.svg)",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-24 opacity-30 max-sm:hidden"
        style={{
          backgroundImage: "url(/hero/doodles.svg)",
          backgroundRepeat: "repeat",
        }}
      />

      <Container>
        {/* Top footer */}
        <div className="grid gap-10 py-12 lg:grid-cols-5">
          {/* Pages */}
          <div className="order-1">
            <h4 className="mb-3 text-sm font-semibold text-[#503217]">Pages</h4>
            <ul className="space-y-2 text-sm text-[#6B5E55]">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility */}
          <div className="order-2">
            <h4 className="mb-3 text-sm font-semibold text-[#503217]">
              Utility
            </h4>
            <ul className="space-y-2 text-sm text-[#6B5E55]">
              <li>
                <Link href="/" className="hover:underline">
                  Style guide
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Instruction
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Link in bio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Error 404
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Password protected
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Center */}
          <div className="order-3 col-span-1 text-center lg:col-start-3">
            <div className="inline-flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-[#CDBEAE] text-[#503217]">
                +
              </span>
              <span className="text-[28px] font-extrabold leading-none text-[#503217]">
                Medifit
              </span>
            </div>
            <p className="mx-auto mt-2 max-w-xs text-sm text-[#6B5E55]">
              We provides the ultimate solution for your online store and all
              the healthcare needs.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 text-[#503217]">
              <Link
                aria-label="Facebook"
                href="https://facebook.com"
                className="rounded-md p-1.5 ring-1 ring-[#DCCFBE] hover:bg-white"
              >
                <Facebook size={16} />
              </Link>
              <Link
                aria-label="Instagram"
                href="https://instagram.com"
                className="rounded-md p-1.5 ring-1 ring-[#DCCFBE] hover:bg-white"
              >
                <Instagram size={16} />
              </Link>
              <Link
                aria-label="Twitter"
                href="https://twitter.com"
                className="rounded-md p-1.5 ring-1 ring-[#DCCFBE] hover:bg-white"
              >
                <Twitter size={16} />
              </Link>
              <Link
                aria-label="YouTube"
                href="https://youtube.com"
                className="rounded-md p-1.5 ring-1 ring-[#DCCFBE] hover:bg-white"
              >
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="order-4">
            <h4 className="mb-3 text-sm font-semibold text-[#503217]">
              Address
            </h4>
            <p className="flex items-start gap-2 text-sm text-[#6B5E55]">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              1640 Parker Rd. Allentown,
              <br /> New Mexico 31134
            </p>
          </div>

          {/* Contact */}
          <div className="order-5">
            <h4 className="mb-3 text-sm font-semibold text-[#503217]">
              Contact
            </h4>
            <p className="flex items-center gap-2 text-sm text-[#6B5E55]">
              <Mail size={16} /> hello@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm text-[#6B5E55]">
              <Phone size={16} /> (209) 555-0104
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E6DED5] py-5">
          <p className="text-center text-xs text-[#8C7E73]">
            Design By{" "}
            <Link href="https://webestica.com" className="underline">
              Webestica
            </Link>
            , Powered By{" "}
            <Link href="https://webflow.com" className="underline">
              Webflow
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  )
}
