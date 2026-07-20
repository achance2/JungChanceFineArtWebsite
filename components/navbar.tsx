"use client";

import Link from "next/link";
import { loveAmour  } from "@/app/fonts";

export default function Navbar() {
  return (
      <nav className="absolute top-[80px] w-full">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between">
          <Link href="/" className={`${loveAmour .className} text-7xl text-[#5B5149]`}>
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