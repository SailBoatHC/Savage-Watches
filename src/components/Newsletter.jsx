import { AiOutlineArrowRight } from 'react-icons/ai';
import '../main.css'

const Newsletter = () => {
    return (
        <div className="mx-[7.5%] mt-[150px] flex flex-col">
            <h1 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h1>
            <div className='flex w-min h-[70px] gap-x-2'>
                <input
                    type="text"
                    className="
                        mt-3
                        xs:w-[25rem]
                        sm:w-[30rem]
                        md:w-[35rem]
                        h-10
                        border-2
                        border-neutral-50
                        rounded-full
                        outline-none
                        bg-neutral-950
                        placeholder-neutral-50
                        pl-3
                        pr-2
                    "
                    placeholder='Email'
                />
                <button
                    className='
                    w-[150px]
                    lg:h-[51px]
                    h-min
                    rounded-full
                    bg-neutral-200
                    text-lg
                    border
                    border-transparent
                    px-4
                    py-3
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    text-black
                    font-bold
                    hover:opacity-75
                    transition
                    mt-[3px]
                    '
                    onClick="window.location.href='/'"
                    onSubmit={() => {}}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Newsletter;