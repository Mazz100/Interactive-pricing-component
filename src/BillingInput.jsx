

function BillingInput() {
    return (
        <fieldset className="billing-filedset">
            <legend className="visually-hidden">Billing</legend>
            <label className="billing-label" htmlFor="Monthly">
                Monthly Billing
            </label>

            {/*Wrapping inputs with span for styling*/}
            <span className="toggle-wrapper">
                <input className="billing-radio" type="radio" name="Billing" id="Monthly" defaultChecked aria-describedby="monthly toggle switch" />
                <input className="billing-radio" type="radio" name="Billing" id="Yearly" aria-describedby="yearly toggle switch" />

                {/*Switch and thumb style elements*/}
                <span className="toggle"></span>
            </span>

            <label className="billing-label" htmlFor="Yearly">
                Yearly Billing <span className="discount-text">-25%</span>
            </label>

        </fieldset>
    );
}

export default BillingInput