
import Navbar from '../Components/Navbar'

function Products() {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-bold mb-4">
          Our Movies
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our collection of movies and discover
          something exciting to watch.
        </p>

      </div>

    </div>
   </>
  )
}

export default Products