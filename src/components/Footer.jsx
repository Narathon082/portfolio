import { Github, Twitter, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-20 border-t border-gray-700">

      <div className="max-w-7xl mx-auto px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">

          {/* LOGO */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Letta
            </h2>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-500">
              Product
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-white cursor-pointer">What is Letta</li>
              <li className="hover:text-white cursor-pointer">Customers</li>
              <li className="hover:text-white cursor-pointer">Research</li>
              <li className="hover:text-white cursor-pointer">News</li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-500">
              Developers
            </h3>
            <ul className="space-y-4">
              <li className="hover:text-white cursor-pointer">GitHub</li>
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Demos</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-gray-500">
              Newsletter
            </h3>

            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border border-gray-600 px-4 py-2 outline-none focus:border-white transition"
              />
              <button className="bg-gray-300 text-black px-4 hover:bg-white transition">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Github size={18} /> GitHub
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Twitter size={18} /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Letta. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
