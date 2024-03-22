import sliderIcon from './assets/images/icon-slider.svg'
import BillingInput from "./BillingInput";
import TrialComponent from "./TrialComponent";
import React, { useEffect, useState } from 'react'
import * as Slider from '@radix-ui/react-slider'

function PricingComponent() {
    const [page, setPage] = useState(100);
    const [price, setPrice] = useState(16);


    return (
        <>
            <div className='pricing-container'>
                <form className='form' action="" name="">

                    <p className="page-views-text">
                        {`${page}K pageviews`}
                    </p>

                    {/*Pricing Slider*/}
                    <Slider.Root className='sliderRoot'
                        defaultValue={[3]}
                        max={5}
                        step={1}
                    >
                        <Slider.Track className='sliderTrack'>
                            <Slider.Range className='sliderRange' />
                        </Slider.Track>
                        <Slider.Thumb className='thumbSlider'>
                            <img src={sliderIcon} alt="" />
                        </Slider.Thumb>
                    </Slider.Root>

                    <p className='price-text'>{`$${price.toFixed(2)}`}<span> / month</span></p>

                    <BillingInput />
                </form>

                <TrialComponent />
            </div>


        </>
    )
}

export default PricingComponent