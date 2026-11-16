
function Categories() {
  const categories = [
    {
      id: 1,
      name: "Action",
      description: "Exciting action-packed movies"
    },
    {
      id: 2,
      name: "Comedy",
      description: "Movies that make you laugh"
    },
    {
      id: 3,
      name: "Romance",
      description: "Beautiful romantic stories"
    },
    {
      id: 4,
      name: "Horror",
      description: "Scary and thrilling movies"
    },
    {
      id: 5,
      name: "Adventure",
      description: "Explore exciting adventures"
    },
    {
      id: 6,
      name: "Sci-Fi",
      description: "Explore futuristic worlds"
    },
    {
      id: 7,
      name: "Drama",
      description: "Emotional and powerful stories"
    },
    {
      id: 8,
      name: "Animation",
      description: "Enjoy animated movies"
    }
  ];


  return (
    <section className="bg-gray-950 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-3xl font-bold text-white mb-3">
          Explore Movie Categories
        </h2>

        <p className="text-gray-400">
          Discover movies from your favorite genres
        </p>

      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category) => (

          <div
            key={category.id} className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800 hover:border-yellow-500 hover:-translate-y-2 transition duration-300 shadow-lg"
          >


            <h3 className="text-xl font-semibold text-white mb-2"> {category.name}
            </h3>

            <p className="text-gray-400 text-sm mb-5"> {category.description}
            </p>
            <Link to="/products"><button className="bg-yellow-600 text-white px-5 py-2
            rounded-lg hover:bg-yellow-700 transition">
              Explore Movies
            </button></Link>


          </div>

        ))}

      </div>

    </section>
  );
}



export default Categories