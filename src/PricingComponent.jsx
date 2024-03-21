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

                    <p className='price-text'>{`$${price.toFixed(2)}`}<span> / month</span></p>

                    {/*Pricing Slider*/}
                    <Slider.Root className='sliderRoot'
                        defaultValue={[50]}
                        max={100}
                        step={10}>
                        <Slider.Track className='sliderTrack'>
                            <Slider.Range className='sliderRange' />
                        </Slider.Track>
                        <Slider.Thumb className='thumbSlider'>
                            <img src={sliderIcon} alt="" />
                        </Slider.Thumb>
                    </Slider.Root>


                    <BillingInput />
                </form>

                <TrialComponent />
            </div>


        </>
    )
}

export default PricingComponent