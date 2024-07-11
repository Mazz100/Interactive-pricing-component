import React, { useState, useEffect } from "react";

function BillingInput({ discountState }) {
  const [choosePlan, setChoosePlan] = useState("Monthly");

  function handlePlanChange(event) {
    setChoosePlan(event.target.value);
  }

  useEffect(() => {
    const applyDiscount = choosePlan === "Yearly" ? true : false;
    discountState(applyDiscount);
  }, [choosePlan]);

  return (
    <fieldset className="billing-filedset">
      <legend className="visually-hidden">Billing</legend>
      <div className="price-toggle">
        <label className="billing-label" htmlFor="Monthly">
          Monthly Billing
        </label>

        {/*Wrapping inputs with span for styling*/}
        <span className="toggle-wrapper">
          <input
            className="billing-radio"
            style={choosePlan === "Monthly" ? { zIndex: "1" } : { zIndex: "2" }}
            type="radio"
            name="Billing"
            id="Monthly"
            value="Monthly"
            onChange={handlePlanChange}
            checked={choosePlan === "Monthly"}
            aria-checked={choosePlan === "Monthly"}
          />

          <input
            className="billing-radio"
            style={choosePlan === "Yearly" ? { zIndex: "1" } : { zIndex: "2" }}
            type="radio"
            name="Billing"
            id="Yearly"
            value="Yearly"
            onChange={handlePlanChange}
            checked={choosePlan === "Yearly"}
            aria-checked={choosePlan === "Yearly"}
          />

          {/*Switch and thumb style element*/}
          <span className="toggle-background"></span>
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

export default BillingInput;
