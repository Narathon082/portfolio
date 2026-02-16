function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1
          className="text-2xl font-bold tracking-wide text-gray-800 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Port<span className="text-yellow-500 ">folio</span>
        </h1>

        <ul className="hidden lg:flex gap-8 font-medium text-gray-700">

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio 
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar