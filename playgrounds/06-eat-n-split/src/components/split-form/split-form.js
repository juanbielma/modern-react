import { useState } from "react";

const SplitForm = ({ id, name, balance, onSplit }) => {
  const [payer, setPayer] = useState("you");
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");

  function handleSplitBills(e) {
    e.preventDefault();
    let diffBalance = 0;
    let newBalance = 0;

    if (payer === "you") {
      diffBalance = bill - myExpense;
      newBalance = balance + diffBalance;
    } else {
      diffBalance = bill - friendExpense;
      newBalance = balance - diffBalance;
    }

    onSplit(id, newBalance);
    resetForm();
  }

  function resetForm() {
    setPayer("you");
    setBill("");
    setMyExpense("");
    setFriendExpense("");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitBills}>
      <h2>Split a form with {name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number.parseInt(e.target.value))}
      />
      <label>🧍 Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => setMyExpense(Number.parseInt(e.target.value))}
      />
      <label>👫 {name} expense</label>
      <input
        type="number"
        value={friendExpense}
        onChange={(e) => setFriendExpense(Number.parseInt(e.target.value))}
      />
      <label>🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <button className="button">Splitt bill</button>
    </form>
  );
};

export default SplitForm;
