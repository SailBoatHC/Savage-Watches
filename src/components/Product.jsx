import { twMerge } from 'tailwind-merge';
import { FaShoppingCart } from 'react-icons/fa'

const Product = ({ name, onClick, price, image, imageAlt, className, discount, imgClassName }) => {
    return (
        <div onClick={onClick} className={twMerge(`flex flex-col bg-neutral-900 h-[360px] rounded-lg select-none`,className )}>
            <div className='flex justify-center items-center'>
                <h2 className='text-2xl font-bold mb-2 pt-2'>{name}</h2>
            </div>
            <a class="relative mx-3 mt-1 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className={twMerge(`object-cover cursor-pointer hover:opacity-80 transition`,imgClassName)} src={image} alt={imageAlt} />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{discount}% OFF</span>
            </a>
            <div className='flex mt-3 ml-4 justify-between items-center'>
                <span className='mb-2 text-lg font-bold'>${price} USD</span>
                <button 
                    className='
                        w-[10.5rem] 
                        rounded-full 
                        bg-neutral-200
                        border
                        border-transparent
                        px-6 
                        py-2 
                        text-black
                        font-bold
                        hover:opacity-75
                        transition
                        flex
                        gap-x-2
                        mb-3
                        mr-2
                    '
                    onClick="window.location.href='/'"
                >
                    Add To Cart
                    <FaShoppingCart size={20}/>
                </button>
            </div>
        </div>
    );
};

export default Product;