"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#E6DED5]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#CDBEAE] text-[#503217]">
            +
          </span>
          <span className="text-lg font-bold text-[#503217]">Medifit</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#503217] hover:text-[#8C7E73]"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#503217] hover:text-[#8C7E73]"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#503217] hover:text-[#8C7E73]"
          >
            Pages
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#503217] hover:text-[#8C7E73]"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#503217] hover:text-[#8C7E73]"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-[#503217] hover:text-[#8C7E73]"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Cart"
            className="text-[#503217] hover:text-[#8C7E73]"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
