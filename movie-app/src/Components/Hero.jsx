
function Hero() {
    return (
        <>
        <section className="relative min-h-[550px] flex items-center overflow-hidden bg-gray-950">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600"
        alt="Movie theater"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-20">

        <span className="bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
          Featured Movies
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-2xl mt-6">
          Discover Your Next
          <span className="text-yellow-500"> Favourite Movie</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl mt-6 leading-relaxed">
          Explore amazing movies across different genres.
          From thrilling action to unforgettable romance,
          find something worth watching.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href="#movies"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Explore Movies
          </a>

          <a
            href="#categories"
            className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition"
          >
            Browse Categories
          </a>
        </div>

      </div>
    </section>


        </>
    )
}

export default Hero