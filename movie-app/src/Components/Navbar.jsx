import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className="w-full bg-gray-950 shadow-lg">
        <header className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-500 tracking-wide">
            Movie<span className="text-white">-App</span>
          </h1>

          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-base font-medium">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                  Home
                </Link></li>

              <li>
                <Link to="/About" className="text-gray-300 hover:text-yellow-500 transition duration-300">
                  About
                </Link></li>

              <li>
                <Link to ="/Products" className="text-gray-300 hover:text-yellow-500 transition duration-300">
                  Products
                </Link></li>

              <li>
                <Link to ="/Contact" className="text-gray-300 hover:text-yellow-500 transition duration-300">Contact Us
                </Link></li>
            </ul>
          </nav>

        </header>
      </div>
    </>
  )
}

export default Navbar