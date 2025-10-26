import bgShadow from '../../assets/bg-shadow.png';
import '../../index.css'

const Newsletter = () => {
    return (
        <div className="bg-[#06091A] py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-[1340px] w-full mx-auto rounded-3xl outline outline-[#ffffff] outline-offset-8 -translate-y-36">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-white/40 p-10 sm:p-14 md:p-20 lg:p-24 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-transparent to-yellow-100 opacity-60 z-0"></div>

                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay z-0"
                        src={bgShadow}
                        alt="background shadow image"
                        />

                        <div className="relative z-10 text-center space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#131313]">
                                Subscribe to our Newsletter
                                </h2>

                            <p className="text-lg text-[#131313b3]">
                                Get the latest updates and news right in your inbox!
                                </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                                <input
                                className="input input-bordered w-full sm:w-96 px-4 py-3"
                                placeholder="Enter your email"
                                type="email"
                                />
                                <button className="btn bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 border-none rounded-xl shadow-inner animate-gradient w-full sm:w-auto px-8 py-3">
                                Subscribe
                                </button>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Newsletter