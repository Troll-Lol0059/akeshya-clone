import React from 'react'
import SectionHeadings from '../common/SectionHeadings';

function ContactUsSection() {
    return (
        <section>
            {/* heading div */}
            <div>
                <SectionHeadings heading={'CONTACT US'} />
            </div>

            <div>
                {/* left sub - section */}
                <div>
                    <h3>
                        Akeshya
                    </h3>

                    <p>
                        Designers, developers & marketeers capable of delivering solutions according to your needs,
                    </p>
                </div>

                {/* center sub - section */}
                <div>
                    {/* address div */}
                    <div>
                        {/* icon */}
                        <i class="fa-solid fa-location-dot"></i>

                        {/* address */}
                        <div>
                            26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
                        </div>
                    </div>


                    {/* email div */}
                    <div>
                        {/* icon */}
                        <i class="fa-regular fa-envelope"></i>

                        {/* email */}
                        <div>
                            info@akeshya.com
                        </div>
                    </div>


                    {/* phone div */}
                    <div>
                        {/* icon */}
                        <i class="fa-solid fa-phone"></i>

                        {/* phone */}
                        <div>
                            +91 94942 40922
                        </div>
                    </div>
                </div>

                {/* right sub - section */}
                <div>
                    <form>
                        <input type='text' placeholder='Your Name' />
                        <input type='email' placeholder='Your Email' />
                        <input type='text' placeholder='Subject' />
                        <input type='textarea' placeholder='Message' />
                        <button>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default ContactUsSection; 