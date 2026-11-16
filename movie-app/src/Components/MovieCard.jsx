function MovieCard({movie}) {
  return (
    <>
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 hover:-translate-y-2 transition duration-300 group">

  {/* Movie Poster */}
  <div className="relative overflow-hidden">
    <img
      src={movie.image}
      alt={movie.title}
      className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
    />

    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
      {movie.genre}
    </span>
  </div>

  {/* Movie Information */}
  <div className="p-5">

    <h2 className="text-xl font-bold text-white mb-2">
      {movie.title}
    </h2>

    <div className="flex justify-between items-center text-gray-400 text-sm mb-3">
      <span>{movie.year}</span>
      <span className="text-yellow-400">★ {movie.rating}</span>
    </div>

    <p className="text-gray-400 text-sm mb-5">
      {movie.description}
    </p>

    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-300">
      View Details
    </button>

  </div>
</div>
    </>
  )
}

export default MovieCard