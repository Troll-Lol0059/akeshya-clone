import React from 'react'
import Link from 'next/link';

function Footer() {
    return (
        <footer className='w-full shadow-xl border'>
            <div className='xl:w-[90%] lg:w-[90%] md:w-[80%] w-[80%] mx-auto xl:flex lg:flex items-center justify-between py-8 sm:space-y-4 md:space-y-4'>
                {/* CopyRight section */}
                <p className='text-black2 text-[14px] font-openSans'>
                    © Copyright <strong>Akeshya</strong>. All Rights Reserved
                </p>

                <p className='xl:space-x-6 text-[14px] flex xl:flex-row lg:flex-row gap-4 font-openSans text-blueVoilet'>
                    <span>
                        <Link href="/footerDocs/Terms-and-conditions.pdf" target="_blank" rel="noopener noreferrer">
                            Terms and Conditions
                        </Link>
                    </span>

                    <span>
                        <Link href="/footerDocs/Refund-policy.pdf" target="_blank" rel="noopener noreferrer">
                            Refund Policy
                        </Link>
                    </span>

                    <span>
                        <Link href="/footerDocs/Privacy-policy.pdf" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                        </Link>
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;