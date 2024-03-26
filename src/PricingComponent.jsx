import sliderIcon from './assets/images/icon-slider.svg'
import BillingInput from "./BillingInput";
import TrialComponent from "./TrialComponent";
import React, { useEffect, useState } from 'react'
import * as Slider from '@radix-ui/react-slider'

function PricingComponent() {
    const [page, setPage] = useState('100K');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(false);

    const priceTable = {
        '10K': 8,
        '50K': 12,
        '100K': 16,
        '500K': 24,
    }

    const pages = {
        '10K': 0,
        '50K': 25,
        '100K': 50,
        '500K': 75,
        '1M': 100,
    }


    function handlePage(value) {
        //Radix slider onValueChange by default recieves the slider value directly
        let newValue;

        if (value <= 25) {
            newValue = '10K';

        }
        else if (value <= 50) {
            newValue = '50K';

        }
        else if (value <= 75) {
            newValue = '100K';

        }
        else if (value <= 90) {
            newValue = '500K';

        }
        else {
            newValue = '1M';

        }

        setPage(newValue);
    }


    useEffect(() => {
        const calculatedPrice = priceTable[page] || 36;
        setPrice(calculatedPrice);

        /* Old approach
        //Discount calculation
        const discountPercentage = 25
        const discountPrice = price - (price * discountPercentage / 100);
        
         if (discount) {
            setPrice(discountPrice);
        }

        - Got an error on consistent decrease of price until reaching zero.
        - Fixed by creating a fixed object literal values and access each one with page as index
        */

        const discountPercentage = 25;
        const calculatedDiscount = calculatedPrice - (calculatedPrice * discountPercentage / 100) //Calculating price with corresponding page view index 

        if (discount) {
            setPrice(calculatedDiscount);
        }

    

    }, [page, discount, price])


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
                        name='pricing-slider'
                        onValueChange={handlePage}
                        value={[pages[page]]}

                    >
                        <Slider.Track className='sliderTrack'>
                            <Slider.Range className='sliderRange' />
                        </Slider.Track>
                        <Slider.Thumb className='thumbSlider'>
                            <img src={sliderIcon} alt="" />
                        </Slider.Thumb>
                    </Slider.Root>

                    <p className='price-text'>{`$${price.toFixed(2)}`}<span> / month</span></p>

                    <BillingInput discountState={setDiscount} />
                </form>

                <TrialComponent />
            </div>


        </>
    )
}

export default PricingComponent