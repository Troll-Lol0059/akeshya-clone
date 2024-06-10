"use client"
import Image from "next/image"
import Link from "next/link"
import navbarData from '../data/navdata'
import Logo from '../../../public/images/logo.png'
import { usePathname, useSearchParams } from 'next/navigation';


export default function Navbar() {
    // fetches pathname of Current Page
    const pathname = usePathname();
    

    return (
        <div className="lg:w-full lg:flex items-center justify-between">
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

            <nav className="lg:w-fit relative">
                <ul className="list-none lg:flex items-center justify-between flex-wrap py-2 gap-8">
                    {
                        navbarData?.map((item, index) => (
                            <li key={index} className={item.path === '/contact' ? 'bg-[#14279B] px-6 py-2 rounded-full text-white text-[15px] font-[500] hover:bg-[#0d6efd] transition-all' 
                            : `${item.path === pathname ? 'text-[#14279B]' : 'text-[#555555]'}  text-[15px]  py-4 hover:text-[#14279B] transition-all`} >
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}