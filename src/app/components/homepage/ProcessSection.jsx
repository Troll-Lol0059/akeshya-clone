import React from 'react'
import processData from '../../data/processData'
import SectionHeadings from '../common/SectionHeadings'

function ProcessSection() {
    return (
        <section>
            <div>
                <SectionHeadings heading={'OUR PROCESS'} subheading={'Over the years we have evolved a tested method for attaining achievement for each one of our clients.'} />
            </div>

            <div>
                {
                    processData?.map( (item) => (
                        // big container for hover effect
                        <div key={item.id}>
                            {/* small container for data */}
                            <div>
                                {/* heading */}
                                <h3>
                                    {item.heading}
                                </h3>

                                <p>
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ) )
                }
            </div>

        </section>
    )
}

export default ProcessSection;