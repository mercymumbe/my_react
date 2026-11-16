
function Footer() {
  return (
    <>
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6">

  <div className="max-w-7xl mx-auto px-8">

    {/* Footer Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

      {/* Logo and Description */}
      <div>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">
          Movie<span className="text-white">List</span>
        </h2>

        <p className="text-gray-400 leading-relaxed text-sm">
          Discover, explore and enjoy your favourite movies.
          Find the latest releases, popular films and movies
          across different genres all in one place.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white text-lg font-bold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-500 transition">About</a></li>
          <li><a href="#movies" className="hover:text-yellow-500 transition">Products</a></li>
          <li><a href="#categories" className="hover:text-yellow-500 transition">Contact Us</a></li>
        </ul>
      </div>

      {/* Movie Categories */}
      <div>
        <h3 className="text-white text-lg font-bold mb-4">
          Categories
        </h3>

        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-yellow-500 transition">Action</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Comedy</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Romance</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Horror</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Adventure</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Sci-fi</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Drama</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">Animation</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white text-lg font-bold mb-4">
          Contact Us
        </h3>

        <p className="text-sm text-gray-400 mb-3">
      Get in touch with us.
        </p>

        <a
          href="mailto:info@movielist.com"
          className="text-yellow-500 hover:text-yellow-400 text-sm transition"
        >
          info@movielist.com
        </a>

        <div className="flex gap-4 mt-5">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-500 transition">Facebook</a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-500 transition">Instagram</a>
        </div>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-gray-800 pt-6 text-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} MovieList. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>
    </>
  )
}

export default Footer