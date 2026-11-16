
function AboutUs() {
    return (
        <>
            <section id="about" className="bg-gray-900 py-20 px-6 md:px-12">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* About Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000"
                            alt="Movie theater"
                            className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                        />

                        <div className="absolute -bottom-5 -right-4 md:-right-5 bg-red-600 text-white p-5 rounded-xl shadow-lg">
                            <h3 className="text-3xl font-bold">100+</h3>
                            <p className="text-sm">Movies to Explore</p>
                        </div>
                    </div>

                    {/* About Content */}
                    <div>
                        <span className="text-red-500 uppercase tracking-widest font-semibold text-sm">
                            About Movie-App
                        </span>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
                            Your World of Movies, All in One Place
                        </h2>

                        <p className="text-gray-400 mt-6 leading-relaxed">
                            Welcome to Movie-App! Discover and explore movies from different genres and find something great to watch. Whether you love action, comedy, romance, or drama, there's always a movie for you!
                        </p>
                        {/* our vision */}

                        <div className="border-l-4 border-yellow-600 pl-5 mt-8">
                            <h3 className="text-white text-xl font-bold mb-2">
                                our Vision
                            </h3>
                            <p>
                                To make finding and enjoying movies easy and fun for everyone. We want to be a place where movie lovers can discover new films and find something they love to watch.
                            </p>
                        </div>
                        {/* Our Mission */}
                        <div className="border-l-4 border-yellow-600 pl-5 mt-8">
                            <h3 className="text-white text-xl font-bold mb-2">
                                Our Mission
                            </h3>

                            <p className="text-gray-400 leading-relaxed">
                                Our mission is to make movie discovery simple, enjoyable
                                and accessible to everyone.
                            </p>
                        </div>

                        <a
                            href="#movies"
                            className="inline-block mt-8 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                        >
                            Explore Movies
                        </a>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs