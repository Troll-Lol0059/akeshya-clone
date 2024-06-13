import React from 'react'
import SectionHeadings from '../common/SectionHeadings';
import featuresDataArray from '../../data/featuresData';

function FeaturesSection() {
  return (
    <section>
        <div>
            <SectionHeadings heading={'OUR CORE FEATURES'} subheading={'Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.'} />
        </div>

        <div>
            {
                featuresDataArray?.map( (item) => (
                    <div key={item.id}>
                        {/* icon div */}
                        <div>
                          <i class={item.iconName}></i>     
                        </div>

                        {/* feature name DIV */}
                        <div>
                            {
                                item.feature
                            }
                        </div>
                    </div>
                ) )
            }
        </div>

    </section>
  )
}

export default FeaturesSection;