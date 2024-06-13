import React from 'react'
import servicesData from '../../data/servicesData'
import SectionHeadings from '../common/SectionHeadings';


function ServicesSection() {
    return (
        <section>
            {/* heading div */}
            <div>
                <SectionHeadings heading={'SERVICES'} subheading={'Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.'} />
            </div>

            <div>
                {
                    servicesData?.map( (item) => (
                        <div key={item.id}>
                            {/* for border of icon */}
                            <div>
                                {/* icon */}
                                <i class={item.iconName}></i>
                            </div>

                            {/* heading */}
                            <h3>
                                {item.heading}
                            </h3>

                            {/* paragraph */}
                            <p>
                                {item.para}
                            </p>
                        </div>
                    ) )
                }
            </div>

        </section>
    )
}

export default ServicesSection;