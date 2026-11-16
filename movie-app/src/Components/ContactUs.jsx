function ContactUs() {
    return (
        <>
            <section id="contact" className="bg-gray-950 min-h-screen py-16 px-6 md:px-12">

                <div className="max-w-7xl mx-auto">

                    {/* Page Heading */}
                    <div className=" mb-14">
                        <span className="text-yellow-500 uppercase tracking-widest font-semibold text-sm">
                            Get In Touch
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
                            Contact Us
                        </h1>

                        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                            Have questions, feedback or movie recommendations?
                        </p>
                    </div>

                    {/* Contact Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        
                        {/* Contact Form */}
                        <div className="bg-gray-900 p-8 rounded-2xl">

                            <h2 className="text-2xl font-bold text-white mb-6">
                                Send Us a Message
                            </h2>

                            <form className="space-y-5">

                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm"> Full Name </label>
                                    <input type="text" placeholder="Enter your name" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500 transition" />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm"> Email Address </label>
                                    <input type="email" placeholder="Enter your email" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500 transition" />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm"> Subject </label>
                                    <input type="text" placeholder="Enter message subject" required className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500 transition" />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm"> Your Message</label>
                                    <textarea rows="5" placeholder="Write your message here..." required className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none focus:border-red-500 transition resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-lg transition duration-300" > Send Message</button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs