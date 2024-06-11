"use client"
import Image from "next/image"
import Link from "next/link"
import navbarData from '../data/navdata'
import Logo from '../../../public/images/logo.png'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react"

export default function Navbar() {
    // fetches pathname of Current Page
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling when menu is closed
        }
    };

    const closeMobileMenu = () => {
        console.log("I am fired")
        setIsMobileMenuOpen(false);
        document.body.style.overflow = ''; // Re-enable scrolling
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling when menu is closed
        }
    }, [isMobileMenuOpen]);

    return (
        <div className={`lg:w-full relative flex items-center justify-between px-8 lg:px-4`}>
            {/* For Name and Logo */}
            <Link href={"/"}>
                <h1 className="flex items-center text-[30px] text-[#14279B] font-[650]">
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

            <div className="lg:hidden px-4">
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
                        {!isMobileMenuOpen && (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <nav className={`${isMobileMenuOpen ? 'absolute z-[56] left-0 top-7 w-full px-6 py-2 ' : 'hidden'} lg:w-fit lg:block lg:relative lg:px-4 lg:top-0`}>
                <ul className="list-none lg:flex lg:h-fit h-[100vh] bg-white items-center justify-between flex-wrap py-2 gap-8 rounded-md" style={{ zIndex: 60 }}>
                    {
                        navbarData?.map((item, index) => (
                            <li key={index} className={item.path === '/contact' ? 'bg-[#14279B] px-6 py-2 mx-4 rounded-full text-white text-[15px] font-[500] hover:bg-[#0d6efd] transition-all lg:mx-0'
                                : `${item.path === pathname ? 'text-[#14279B]' : 'text-[#555555]'}  text-[15px] py-3 hover:text-[#14279B] transition-all px-6 lg:px-0 lg:py-4`} >
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/* Background Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-[#090909] bg-opacity-90 backdrop-filter transition duration-300 pointer-events-none z-[55]">
                    <div className="absolute right-7 top-5 ">
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
