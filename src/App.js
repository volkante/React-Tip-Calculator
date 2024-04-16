import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [ownTip, setOwnTip] = useState(20);
  const [friendTip, setFriendTip] = useState(20);

  function handleReset() {
    setBill(0);
    setOwnTip(20);
    setFriendTip(20);
  }

  return (
    <div className="App">
      <h1 className="title">Tip Calculator 🧮</h1>
      <BillInput bill={bill} onBill={setBill} />
      <SelectPercentage percentage={ownTip} onSelect={setOwnTip}>
        <p>How did you like the service?</p>
      </SelectPercentage>
      <SelectPercentage percentage={friendTip} onSelect={setFriendTip}>
        <p>How did your friend like the service?</p>
      </SelectPercentage>
      {bill > 0 && <Output bill={bill} ownTip={ownTip} friendTip={friendTip} />}
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onBill }) {
  return (
    <div className="bill-input">
      <label>How much was the bill?</label>
      <input
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="percentage-select">
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, ownTip, friendTip }) {
  const totalTip = ((ownTip + friendTip) / 2) * (bill / 100);
  const totalAll = totalTip + bill;
  return (
    <div className="output">
      <h3>{`You pay 💲${totalAll} ($${bill} + $${totalTip} tip)`}</h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
}
