import '../main.css';

const Banner = () => {
    return (
        <div className="relative">
            <div className="flex justify-center items-center mt-4 relative">
                <img
                    className="rounded-xl w-[85%] h-[50%] opacity-[80%] transition"
                    src="./banner.webp"
                    alt="Banner"
                />
                <div className="absolute bottom-10 4xs:hidden lg:right-10 lg:flex lg:flex-col lg:items-center text-center mx-[7.5%]">
                    <h2 className="md:text-2xl lg:text-3xl font-bold mb-2">The Best Value Watch Store.</h2>
                    <button
                        className="
                            md:w-[130px]
                            lg:w-[150px]
                            rounded-full
                            bg-neutral-200
                            border
                            border-transparent
                            px-6
                            py-2
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            text-black
                            font-bold
                            hover:opacity-75
                            transition
                        "
                        onClick={() => (window.location.href = '/')}
                    >
                        Shop Now
                    </button>
                </div>
            </div>
            <div className='4xs:flex 4xs:flex-col lg:hidden border-b-2 border-t-2 border-neutral-800 mx-[7.5%] mt-2'>
                <div className='flex flex-col my-4 items-center'>
                    <h2 className='4xs:text-xl xs:text-2xl sm:text-3xl font-bold mb-2'>The Best Value Watch Store.</h2>
                    <button
                        className="
                            md:w-[130px]
                            lg:w-[150px]
                            rounded-full
                            bg-neutral-200
                            border
                            border-transparent
                            px-6
                            py-2
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            text-black
                            font-bold
                            hover:opacity-75
                            transition
                        "
                            onClick={() => (window.location.href = '/')}
                        >
                            Shop Now
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
