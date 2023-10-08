import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header id="fixed-header" className="p-2 mb-6">
                <nav className="flex justify-between h-[40px] 4xs:hidden lg:flex xl:mx-[7.5%]">
                    <div className="flex gap-2">
                        <button
                            className="        
                            w-full
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
                            flex
                            gap-x-2
                            "
                            onClick={() => window.location.href = '/'}
                        >
                            <AiFillHome size={20} />
                            Home
                        </button>
                        <button
                            className="
                                w-full 
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
                                flex
                                items-center 
                                gap-2
                            "
                            onClick={() => window.location.href = '/'}
                        >
                            <BsFillTelephoneFill size={20} />
                            Contact
                        </button>
                    </div>
                    <h1 className="text-3xl CD py-1">SAVAGE WATCHES</h1>
                    <div className="flex gap-2">
                        <button
                            className="        
                            w-full 
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
                            gap-x-2
                            flex
                            "
                            onClick={() => window.location.href = '/'}
                        >
                            <FaShoppingCart size={20} />
                            Cart
                        </button>
                        <button
                            className="        
                            w-full 
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
                            gap-x-2
                            flex
                            "
                            onClick={() => window.location.href = '/'}
                        >
                            <IoMdMail size={20} />
                            Login
                        </button>
                    </div>
                </nav>
                {/* Mobile Menu Button */}
                <div className="mx-[7.5%] lg:hidden flex justify-between">
                    <button
                        className="p-2 text-xl"
                        onClick={toggleMobileMenu}
                    >
                        <RxHamburgerMenu />
                    </button>
                    <h1 className="text-3xl CD py-1">SAVAGE WATCHES</h1>
                    <div></div>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="">
                        <div className="mx-[7.5%] mt-3 transition">
                            <button
                                className="
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
                                            gap-x-2
                                            flex
                                            mb-2
                                        "
                                onClick={() => window.location.href = '/'}
                            >
                                <AiFillHome size={20} />
                                Home
                            </button>
                            <button
                                className="
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
                                gap-x-2
                                flex
                                mb-2
                            "
                                onClick={() => window.location.href = '/'}
                            >
                                <BsFillTelephoneFill size={20} />
                                Contact
                            </button>
                            <button
                                className="
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
                                gap-x-3
                                flex
                                mb-2
                            "
                                onClick={() => window.location.href = '/'}
                            >
                                <FaShoppingCart size={20} />
                                Cart
                            </button>
                            <button
                               className="
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
                               gap-x-2
                               flex
                           "
                                onClick={() => window.location.href = '/'}
                            >
                                <IoMdMail size={20} />
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
