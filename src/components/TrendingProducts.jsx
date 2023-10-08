import Product from "./Product";
import { AiFillEye } from "react-icons/ai"

const TrendingProducts = () => {
    const onClick = () => {}
    const Products = [
        {
            id: 2,
            name: 'REVYKIN Watch',
            price: 59.99,
            image: './watch1.avif',
            discount: 50,
            className:'w-[370px] 4xs:hidden lg:flex', 
            imgClassName:'w-[350px]',
            onClick:{onClick} 
        },
        {
            id: 7,
            name: 'FOSSIL IV',
            price: 89.99,
            discount: 12,
            image:'./watch2.webp', 
            className:'w-[370px]',
            imgClassName:'w-[350px]',
            onClick:{onClick} 
        },
        {
            id: 1,
            name: 'Google Pixel Watch',
            price: 119.99,
            discount: 12,
            image: './watch3.jpeg',
            className:'w-[370px]', 
            imgClassName:'w-[350px]',
            onClick:{onClick} 
        }
    ]

    return (
        <>
            <div className=" mt-[40px] flex flex-col sm:mx-[7.5%]">
                <h2 className="font-bold text-3xl">Trending Products</h2>
                <div className="flex gap-x-4 mt-7 4xs:flex-col sm:flex-row justify-center items-center md:gap-y-4">
                    <Product 
                        name='REVYKIN Watch' 
                        onClick={onClick} 
                        image='./watch1.avif' 
                        price='50.00' 
                        discount='50'
                        className='w-[370px] 4xs:hidden lg:flex' 
                        imgClassName='w-[350px]'
                    />
                    <Product 
                        name='FOSSIL IV' 
                        onClick={onClick} 
                        image='./watch2.webp' 
                        price='89.99' 
                        discount='15' 
                        className='w-[370px]' 
                        imgClassName='w-[350px]'
                    />
                    <Product 
                        name='Google Pixel Watch' 
                        onClick={onClick} 
                        image='./watch3.jpeg' 
                        price='119.99' 
                        discount='20' 
                        className='w-[370px]' 
                        imgClassName='w-[350px]'
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className='
                            w-[150px]
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
                            mt-6
                            flex
                            gap-x-2
                        '
                        onClick="window.location.href='/'"
                    >
                        <AiFillEye size={20} className="mt-[1px]" />
                        View All
                    </button>
                </div>
            </div>
        </>
    );
};

export default TrendingProducts;