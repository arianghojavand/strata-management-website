export default function Navbar() {
    return (
      <header className="bg-black shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white">Strata Management</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#services" className="text-white  hover:text-gray-300">Services</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>
    );
  }