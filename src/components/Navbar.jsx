import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()   // เพิ่มบรรทัดนี้

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1
          className="text-2xl font-bold tracking-wide text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}   // เพิ่ม
        >
          Port<span className="text-yellow-500">folio</span>
        </h1>

        <ul className="hidden lg:flex gap-8 font-medium text-gray-700">

          <li
            className="border-b-2 border-yellow-400 pb-1 cursor-pointer"
            onClick={() => navigate("/")}   // เพิ่ม
          >
            Home
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => navigate("/about")}   // เพิ่ม
          >
            About
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => navigate("/work")}
          >
            Work
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => navigate("/blog")}
          >
            Blog
          </li>

          <li
            className="hover:text-yellow-500 cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar