import React from 'react'

function SectionHeadings({ heading, subheading='' }) {
    return (
        <div>
            {/* heading div */}
            <div>
                <div></div>
                <h2>{heading}</h2>
                <div></div>
            </div>

            {/* Subheading div */}
            <div>
                <p>{subheading}</p>
            </div>
        </div>
    )
}

export default SectionHeadings;