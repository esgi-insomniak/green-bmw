import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 w-full z-40 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div
        className="flex items-center text-white w-32 justify-center h-full space-x-2"
        onClick={() => router.push("/")}
      >
        <span className="font-semibold text-xl tracking-tight">BMW</span>
        <Image
          src="/bmw_logo.png"
          alt="BMW Logo"
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={handleToggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="lg:flex-grow uppercase tracking-wide space-x-3">
          <Link
            href="/#header"
            className="block min-w-[5rem] text-center lg:inline-block lg:mt-0 text-white hover:text-blue-400"
            onClick={handleToggleMenu}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block min-w-[5rem] text-center lg:inline-block lg:mt-0 text-white hover:text-blue-400"
            onClick={handleToggleMenu}
          >
            Produits
          </Link>
        </div>
      </div>
    </nav>
  );
}
