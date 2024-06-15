"use client"
import Image from "next/image"
import Link from "next/link"
import navbarData from '../../data/navdata'
import Logo from '../../../../public/images/logo.png'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react"
import useScrollPosition from '../../hooks/useScrollPosition'; 

export default function Navbar() {
    // Fetches pathname of Current Page
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isScrolled = useScrollPosition();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    return (
        <div className={`w-full mx-auto relative flex items-center justify-between px-8 xl:px-[90px] lg:px-4 md:py-2 md:px-8 transition-all duration-300 ${isScrolled && 'py-2 lg:py-1 shadow-lg lg:shadow-md'} ${isScrolled ? 'lg:py-1' : 'py-4'}`}>
            {/* For Name and Logo */}
            <Link href={"/"}>
                <h1 className="flex items-center justify-center text-[30px] text-[#14279B] font-semibold lg:px-5 transition-all duration-300" >
                    {/* Logo */}
                    <div>
                        <Image
                            src={Logo}
                            width={65}
                            height={70}
                            alt="Company Logo"
                        />
                    </div>

                    {/* Company Name */}
                    <div className="leading-none tracking-[1px]">
                        AKESHYA
                    </div>
                </h1>
            </Link>

            <div className="lg:hidden px-4 z-50">
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-600 focus:outline-none focus:text-gray-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {!isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <nav className={`${isMobileMenuOpen ? 'absolute z-[56] left-0 top-7 w-full px-3 py-4 ' : 'hidden'} lg:w-fit w-full lg:block lg:relative lg:px-4 lg:py-1 lg:top-0`}>
                <ul className="list-none lg:flex lg:h-fit h-[100vh] bg-white items-center justify-between flex-wrap py-2 gap-8 rounded-md" style={{ zIndex: 60 }}>
                    {
                        navbarData?.map((item, index) => (
                            <li key={index} className={item.path === '/contact' ? 'bg-[#14279B] px-6 py-2 mx-4 rounded-full text-white text-[15px] font-medium hover:bg-[#0d6efd] transition-all lg:mx-0'
                                : `${item.path === pathname ? 'text-[#14279B]' : 'text-[#555555]'} font-openSans text-[15px] py-3 hover:text-[#14279B] transition-all px-6 lg:px-0 lg:py-4`} >
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* Background Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden w-full fixed inset-0 bg-[#090909] bg-opacity-90 transition duration-300 z-[55]">
                    <div className="absolute md:right-6 md:top-6 top-4 right-5 z-[57]">
                        <button onClick={closeMobileMenu} className="text-white font-semibold">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}


