import sliderIcon from './assets/images/icon-slider.svg'
import React, { useEffect, useState } from 'react'

function PricingSubscription() {
    const [page, setPage] = useState(100);
    const [price, setPrice] = useState(16);


    return (
        <div>
            <p className="page-views-text">
                {`${page}K pageviews`}
            </p>

            {/*Pricing Slider*/}
            <div className="bg-slider">
                <div className="fg-slider">
                    <img src={sliderIcon} alt="" />
                </div>
            </div>

            <p>{`$${price.toFixed(2)}`}<span>/ month</span></p>

        </div>
    )
}

export default PricingSubscription