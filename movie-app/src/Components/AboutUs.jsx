
function AboutUs() {
    return (
        <>
            <section id="about" className="bg-gray-900 py-20 px-6 md:px-12">

                <div >


                    {/* About Content */}
                    <div>
                        <div>
                            <h2 className="text-yellow-500 uppercase tracking-widest font-extrabold ">
                                About Movie-App
                            </h2>

                            <p className="text-gray-400 mt-6 leading-relaxed">
                                Welcome to Movie-App! Discover and explore movies from different genres and find something great to watch. Whether you love action, comedy, romance, or drama, there's always a movie for you!
                            </p>
                        </div>
<br />

                        {/* our vision */}

                        <div >
                            <h3 className="text-white text-xl font-bold mb-2">
                                Our Vision
                            </h3>
                            <p className="text-gray-400 mt-6 leading-relaxed">
                                To make finding and enjoying movies easy and fun for everyone. We want to be a place where movie lovers can discover new films and find something they love to watch.
                            </p>
                        </div>
                        <br />
                        {/* Our Mission */}
                        <div >
                            <h3 className="text-white text-xl font-bold mb-2">
                                Our Mission
                            </h3>

                            <p className="text-gray-400 leading-relaxed"> Our mission is to make movie discovery simple, enjoyable and accessible to everyone.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs