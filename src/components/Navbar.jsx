function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-10 py-4 flex justify-between z-50">
      <h1 className="font-bold text-lg">Whitespace</h1>

      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="border-b-2 border-yellow-400">Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar