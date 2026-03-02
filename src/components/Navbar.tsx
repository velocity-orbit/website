import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-4 text-gray-200">
      <div className="flex items-center gap-4 text-white">
        <Image src="/Logo.png" alt="logo" height={30} width={30} />
        <span className="text-xl font-bold">Velocity Orbit</span>
      </div>
      <div className="flex items-center gap-12">
        <Link
          href="/"
          className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
        >
          Services
        </Link>
        <Link
          href="/careers"
          className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
        >
          Careers
        </Link>
        <Link
          href="/team"
          className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
        >
          Team
        </Link>
        <Link
          href="/about"
          className="font-semibold transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255)]"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
