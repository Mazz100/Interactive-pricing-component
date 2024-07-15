import sliderIcon from "./assets/images/icon-slider.svg";
import BillingInput from "./BillingInput";
import TrialComponent from "./TrialComponent";
import React, { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";

function PricingComponent() {
  const [page, setPage] = useState("100K");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(false);

  const priceValue = {
    "10K": 8,
    "50K": 12,
    "100K": 16,
    "500K": 24,
  };

  const pageValue = {
    "10K": 0,
    "50K": 1,
    "100K": 2,
    "500K": 3,
    "1M": 4,
  };

  function handlePage(value) {
    //Radix slider onValueChange by default recieves the slider value directly
    let newValue;

    if (value <= 0) {
      newValue = "10K";
    } else if (value <= 1) {
      newValue = "50K";
    } else if (value <= 2) {
      newValue = "100K";
    } else if (value <= 3) {
      newValue = "500K";
    } else {
      newValue = "1M";
    }

    setPage(newValue);
  }

  useEffect(() => {
    const calculatedPrice = priceValue[page] || 36;
    setPrice(calculatedPrice);

    const discountPercentage = 25;
    const calculatedDiscount =
      calculatedPrice - (calculatedPrice * discountPercentage) / 100; //Calculating price with corresponding page view index

    if (discount) {
      setPrice(calculatedDiscount);
    }
  }, [page, discount, price]);

  return (
    <>
      <div className="pricing-container">
        <form className="form">
          <p className="page-views-text">{`${page} pageviews`}</p>

          {/*Pricing Slider*/}
          <Slider.Root
            className="slider-root"
            max={4}
            name="pricing-slider"
            onValueChange={handlePage}
            value={[pageValue[page]]}
            step={1}
            dir="ltr"
          >
            <Slider.Track className="slider-track">
              <Slider.Range className="slider-range" />
            </Slider.Track>
            <Slider.Thumb className="slider-thumb" aria-label="Pricing thumb">
              <img src={sliderIcon} alt="" />
            </Slider.Thumb>
          </Slider.Root>

          <p className="price-text">
            {`$${price.toFixed(2)}`}
            <span> / month</span>
          </p>

          <BillingInput discountState={setDiscount} />
        </form>

        <TrialComponent />
      </div>
    </>
  );
}

export default PricingComponent;
