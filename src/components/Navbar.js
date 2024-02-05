import React, { useEffect, useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-[#5252D4] w-full h-15 flex lg:justify-around items-center text-white font-montserrat text-base font-normal leading-normal relative'>
            <div className='w-36 h-16 shadow-[5px_5px_0px_0px_rgba(0,0,0)] lg:mx-40 flex-shrink-0 rounded-b-lg bg-gray-200 flex justify-center items-center'>
                <h1 className="text-[#5252D4] font-montserrat text-2xl font-bold leading-[1.309] tracking-[0.48]">CodinGo</h1>
            </div>
            <div className={`lg:flex text-white lg:flex-row top-12 lg:top-0 lg:items-center lg:justify-around lg:space-x-4 absolute left-0 right-0 bg-[#5252D4] lg:bg- z-50 ${isOpen ? 'flex flex-col' : 'hidden'} lg:relative lg:flex-row lg:visible w-full lg:z-0`}>
                <p className='lg:py-0 py-2 lg:px-0 md:text-xl px-4 text-center lg:text-left'>Compile and Execute codes in 40+ languages</p>
            </div>
            <div className='lg:hidden absolute top-3 right-3' onClick={toggleMenu}>
                <svg
                    className='w-6 h-6 cursor-pointer'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    {isOpen ? (
                        <path d='M6 18L18 6M6 6l12 12' />
                    ) : (
                        <path d='M4 6h16M4 12h16m-7 6h7' />
                    )}
                </svg>
            </div>
        </div>
    );
}
