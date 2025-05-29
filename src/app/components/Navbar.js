import Link from "next/link";


export default function Navbar() {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-1 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white hover:text-gray-300">
          Strata Management
        </Link>
        <nav className="space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/services_page" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link href="/resources_page" className="text-white hover:text-gray-300">Resources</Link>
          <Link href="/strata_roll" className="text-white hover:text-gray-300">Strata Roll</Link>
          <Link href="/portal" className="text-white hover:text-gray-300">Portal</Link>
        </nav>
      </div>
    </header>
  );
}