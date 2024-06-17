import React from 'react';
import aboutUsListData from '../../data/aboutUsListData';
import SectionHeadings from '../common/SectionHeadings';
import Button1 from '../common/Button1';
import Fade from '../common/Fade';
import Link from 'next/link';

function AboutUsSection() {
  return (
    <Fade initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <section className="flex flex-col items-center justify-center gap-8 my-16">
        {/* Heading Div */}
        <div>
          <SectionHeadings heading={'ABOUT US'} />
        </div>

        {/* Content Div */}
        <div className="lg:w-full flex lg:flex-row flex-col justify-center text-[1rem] font-openSans text-black4 leading-[1.5] font-[500] tracking-normal lg:gap-2 gap-8">
          {/* Left Section */}
          <div className="lg:w-[50%] lg:px-3 lg:space-y-0 space-y-4">
            <p>
              We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>

            <ul className="lg:py-4">
              {aboutUsListData?.map((item) => (
                <li key={item.id} className="flex items-start gap-2 lg:py-1">
                  <div className="text-blueVoilet text-[20px]">
                    <i className="ri-check-double-line"></i>
                  </div>
                  <div className="py-1">
                    {item.data}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:w-[50%] lg:px-3 space-y-6 flex flex-col gap-6 xl:gap-0 lg:gap-0">
            <div>
              We&apos;re professional, but we&apos;re also friendly, and we&apos;ll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you&apos;re interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
            </div>

            <Link href={'/#services'}>
              <Button1 text={'Learn More'} customClass={'px-8 py-[6px] lg:my-6 xl:my-6'} />
            </Link>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default AboutUsSection;
