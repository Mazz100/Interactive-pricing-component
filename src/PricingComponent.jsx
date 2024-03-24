import sliderIcon from './assets/images/icon-slider.svg'
import BillingInput from "./BillingInput";
import TrialComponent from "./TrialComponent";
import React, { useEffect, useState } from 'react'
import * as Slider from '@radix-ui/react-slider'

function PricingComponent() {
    const [page, setPage] = useState('100K');
    const [price, setPrice] = useState(16);



    function handlePage(value) {
        //Radix slider onValueChange by default recieves the slider value directly
        let newValue;

        if (value <= 25) {
            newValue = '10K';
            setPrice(8);
        }
        else if (value <= 50) {
            newValue = '50K';
            setPrice(12);
        }
        else if (value <= 75) {
            newValue = '100K';
            setPrice(16);
        }
        else if (value <= 90) {
            newValue = '500K';
            setPrice(24);
        }
        else {
            newValue = '1M';
            setPrice(36);
        }

        setPage(newValue);
    }

    console.log(page);

    return (
        <>
            <div className='pricing-container'>
                <form className='form' action="" name="">

                    <p className="page-views-text">
                        {page} pageviews
                    </p>

                    {/*Pricing Slider*/}
                    <Slider.Root className='sliderRoot'
                        max={100}
                        onValueChange={handlePage}
                        value={[page === '10K' ? 0 :
                            page === '50K' ? 25 :
                                page === '100K' ? 50 :
                                    page === '500K' ? 75 : 100]}
                        step={10}
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