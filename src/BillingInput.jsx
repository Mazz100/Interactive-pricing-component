

function BillingInput() {
    return (
        <fieldset className="billing-filedset">
            <legend className="visually-hidden">Billing</legend>
            <label className="billing-label" htmlFor="Monthly">
                Monthly Billing
            </label>
            <div className="toggle-swtich">
                <input className="billing-radio" type="radio" name="Billing" id="Monthly" />
                <input className="billing-radio" type="radio" name="Billing" id="Yearly" />

            </div>

            <label className="billing-label" htmlFor="Yearly">
                Yearly Billing <span className="discount-text">-25%</span>
            </label>

        </fieldset>
    );
}

export default BillingInput