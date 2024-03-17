import Subscription from "./Subscription"
import PricingSubscription from "./PricingSubscription";
import BillingInput from "./BillingInput";
import TrialStart from "./TrialStart";

function App() {


  return (
    <>
      <main>
        <Subscription />
        <PricingSubscription />
        <BillingInput />
        <TrialStart />
      </main>

      <footer>

      </footer>
    </>
  );
}

export default App
