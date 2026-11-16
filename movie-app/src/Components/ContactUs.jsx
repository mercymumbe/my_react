import { Link } from "react-router-dom"

function ContactUs() {
    return (
        <>
            <section id="contact" className="bg-gray-950 min-h-screen py-16 px-6 md:px-12">

                <div className="max-w-7xl mx-auto">

                    {/* Page Heading */}
                    <div className=" mb-14">
                        <span className="text-yellow-500 text-4xl md:text-5xl font-extrabold text-white mt-4">
                            Get In Touch
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                            Contact Us
                        </h1>
                    </div>

                    {/* Contact Content */}
                    <div className="grid grid-cols-1  gap-10">
                        <div className="flex flex-col gap-4 text-gray-300">

                            <p className="flex flex-col sm:flex-row sm:gap-2">
                                <strong className="text-white">Phone Number:</strong>
                                <a
                                    href="tel:+254700999122"
                                    className="text-yellow-500 hover:text-yellow-400 transition duration-300"
                                >
                                    0700999122
                                </a>
                            </p>

                            <p className="flex flex-col sm:flex-row sm:gap-2">
                                <strong className="text-white">Email:</strong>
                                <Link to="mailto:info@movieapp.com" className="text-yellow-500 hover:text-yellow-400 transition duration-300" >info@movieapp.com
                                </Link>
                            </p>

                            <p className="flex flex-col sm:flex-row sm:gap-2"><strong className="text-white">Location:</strong><span>Nairobi, Kenya</span>
                            </p>

                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-900 p-8 rounded-2xl">

                            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message
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