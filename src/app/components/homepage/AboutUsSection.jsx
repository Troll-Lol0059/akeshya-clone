import React from 'react'
import aboutUsListData from '../../data/aboutUsListData'
import SectionHeadings from '../common/SectionHeadings';


function AboutUsSection() {
    return (
        <section>
            {/* heading Div */}
            <div>
                <SectionHeadings heading={'ABOUT US'} />
            </div>

            {/* content div */}
            <div>
                {/* left section */}
                <div>
                    <p>
                        We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
                    </p>

                    <ul>
                       {
                         aboutUsListData?.map( (item) => (
                            <li key={item.id}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
                                </span>

                                <span>
                                    {
                                        item.data
                                    }
                                </span>
                            </li>
                         ) )
                       }
                    </ul>
                </div>

                {/* right section */}
                <div>
                    <div>
                        We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
                    </div>

                    <div>
                        Learn More
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutUsSection;