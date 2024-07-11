function TrialComponent() {
  return (
    <>
      <ul className="trial-list" id="features">
        <li className="visually-hidden">
          <span>And get access to</span>
        </li>
        <li className="list list1"> Unlimited websites</li>
        <li className="list list2">100% data ownership</li>
        <li className="list list3">Email reports</li>
      </ul>

      <button className="trial-button" aria-describedby="features">
        Start my trial
      </button>
    </>
  );
}

export default TrialComponent;
