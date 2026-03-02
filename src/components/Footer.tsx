import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="container max-w-7xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-44 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image src="/Logo.png" alt="logo" height={30} width={30} />
              <span className="text-xl font-bold">Velocity Orbit</span>
            </div>
            <p className="max-w-xs">
              Building high-performance rocket engines and space transportation
              systems for LEO, GEO & Lunar missions.
            </p>
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className=" hover:underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className=" hover:underline underline-offset-2"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className=" hover:underline underline-offset-2"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className=" hover:underline underline-offset-2"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" hover:underline underline-offset-2"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold ">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className=" hover:underline underline-offset-2">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:underline underline-offset-2">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href="/" className=" hover:underline underline-offset-2">
                  Link 3
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="pt-20"></div> */}
      </div>

      {/* <div className="w-full flex items-center justify-center absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-4">
        <h1 className="text-gray-600 text-shadow-gray-900 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold opacity-50 text-center whitespace-nowrap pointer-events-none">
          Velocity Orbit
        </h1>
      </div> */}
    </footer>
  );
}
