

function BillingInput() {
    return (
        <div className="billing-container">
            <form action="" name="">
                <fieldset className="billing-filedset">
                    <legend className="visually-hidden">Billing</legend>
                    <label className="billing-label" htmlFor="Monthly">
                        Monthly Billing
                    </label>
                    <input className="billing-radio" type="radio" name="Billing" id="Monthly" />
                    <input className="billing-radio" type="radio" name="Billing" id="Yearly" />
                    <label className="billing-label" htmlFor="Yearly">
                        Yearly Billing <span className="discount-text">-25%</span>
                    </label>
                </fieldset>
            </form>
        </div>
    );
}

export default BillingInput