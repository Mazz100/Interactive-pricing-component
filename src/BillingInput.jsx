import React, { useState, useEffect } from "react";



function BillingInput({ discountState }) {
    const [choosePlan, setChoosePlan] = useState('Monthly');


    function handlePlanChange(event) {
        setChoosePlan(event.target.value);
    }

    function handleRadioToggle() {
        const newPlan = choosePlan === 'Monthly' ? 'Yearly' : 'Monthly';
        setChoosePlan(newPlan);
        console.log(newPlan);
    }

    useEffect(() => {
        if (choosePlan === 'Yearly') {
            discountState(true);
        }
        else {
            discountState(false);
        }

    }, [choosePlan])

    return (
        <fieldset className="billing-filedset">
            <legend className="visually-hidden">Billing</legend>
            <div className="price-toggle">
                <label className="billing-label" htmlFor="Monthly">
                    Monthly Billing
                </label>

                {/*Wrapping inputs with span for styling*/}
                <span className="toggle-wrapper">
                    <input className="billing-radio" type="radio"
                        name="Billing"
                        id="Monthly"
                        value="Monthly"
                        onChange={handlePlanChange}
                        checked={choosePlan === "Monthly"}
                        aria-checked={choosePlan === 'Monthly'}
                    />

                    <input className="billing-radio" type="radio"
                        name="Billing"
                        id="Yearly"
                        value="Yearly"
                        onChange={handlePlanChange}
                        checked={choosePlan === "Yearly"}
                        aria-checked={choosePlan === 'Yearly'} />

                    {/*Switch and thumb style element*/}
                    <span className="toggle" onClick={handleRadioToggle}></span>
                </span>

                <label className="billing-label" htmlFor="Yearly">
                    Yearly Billing
                    <span className="discount-span">
                        <span className="discount-text">-25%</span>

                    </span>
                </label>
            </div>
        </fieldset >
    );
}

export default BillingInput