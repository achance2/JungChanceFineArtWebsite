"use client";

import Link from "next/link";
import { loveAmour  } from "@/app/fonts";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="top-8 md:pt-20">
        {/* navbar for mobile */}

        <div className="flex flex-col items-center pt-4 md:hidden">
          <div
            className={`grid w-full transition-all duration-800 ease-in-out ${
              menuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="mb-2 flex flex-col gap-3 bg-white py-5 text-center text-[#5B5149]">
                <Link href="/">GALLERY</Link>
                <Link href="/about">ABOUT</Link>
                <Link href="https://www.etsy.com/">SHOP</Link>
                <Link href="/event">EVENTS</Link>
                <Link href="/contact">CONTACT</Link>
              </div>

              <div className="mx-auto mb-6 w-60 border-t border-[#5B5149]" />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-lg font-medium text-[#5B5149]"
          >
            MENU
          </button>

          <Link
            href="/"
            className={`${loveAmour.className} mt-4 text-6xl leading-none text-[#5B5149]`}
          >
            Jung Chance
          </Link>
        </div>

        {/* navbar for desktop */}
        <div className="mx-auto hidden w-full max-w-[1300px] items-center justify-between md:flex">
          <Link href="/" className={`${loveAmour.className} text-7xl text-[#5B5149]`}>
            Jung Chance
          </Link>

          <div className="flex gap-8 text-lg font-medium text-black/80">
            <Link href="/" className= "hover:text-[#5B5149]/80">
              GALLERY
            </Link>

            <Link href="/about" className= "hover:text-[#5B5149]">
              ABOUT
            </Link>

            <Link href="https://www.etsy.com/" className= "hover:text-[#5B5149]/80">
              SHOP
            </Link>

            <Link href="/event" className= "hover:text-[#5B5149]/80">
              EVENTS
            </Link>

            <Link href="/contact" className= "hover:text-[#5B5149]/80">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
  );
}