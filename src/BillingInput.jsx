import React, { useState, useEffect } from "react";



function BillingInput() {
    const [choosePlan, setChoosePlan] = useState('');

    function handlePlanChange(event) {
        setChoosePlan(event.target.value);
       
    }


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
                        defaultChecked
                        aria-describedby="monthly toggle switch" />

                    <input className="billing-radio" type="radio"
                        name="Billing"
                        id="Yearly"
                        value="Yearly"
                        onChange={handlePlanChange}
                        aria-describedby="yearly toggle switch" />

                    {/*Switch and thumb style elements*/}
                    <span className="toggle"></span>
                </span>

                <label className="billing-label" htmlFor="Yearly">
                    Yearly Billing
                    <span className="discount-span">
                        <span className="discount-text">-25%</span>
                    </span>
                </label>
            </div>
        </fieldset>
    );
}

export default BillingInput