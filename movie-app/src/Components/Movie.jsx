
function Movie() {
    const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Action",
      year: 2019,
      rating: 8.4,
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      id: 2,
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      rating: 7.7,
      image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
    },
    {
      id: 3,
      title: "The Notebook",
      genre: "Romance",
      year: 2004,
      rating: 7.8,
      image: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg"
    },
    {
      id: 4,
      title: "The Conjuring",
      genre: "Horror",
      year: 2013,
      rating: 7.5,
      image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
    },
    {
      id: 5,
      title: "Jumanji",
      genre: "Adventure",
      year: 1995,
      rating: 7.1,
      image: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg"
    },
    {
      id: 6,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
      image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 7,
      title: "The Pursuit of Happyness",
      genre: "Drama",
      year: 2006,
      rating: 8.0,
      image: "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9h6J8w1Nwf9.jpg"
    },
    {
      id: 8,
      title: "Inside Out",
      genre: "Animation",
      year: 2015,
      rating: 8.1,
      image: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg"
    }
  ];

  return (

    <>
        <div className="min-h-screen bg-gray-950 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              <img src={movie.image} alt={movie.title} className="w-full h-80 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold text-white mb-2"> {movie.title}</h2>

                <p className="text-gray-400 mb-3"> {movie.genre} | {movie.year}</p>

                <div className="flex justify-between items-center">

                  <span className="text-yellow-400 font-semibold">
                    ★ {movie.rating}
                  </span>

                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                    View Movie
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

    </>
  )
}

export default Movie