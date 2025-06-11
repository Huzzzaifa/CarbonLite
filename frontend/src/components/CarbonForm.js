import React, { useState } from "react";
import axios from "axios";

const CarbonForm = ({ userId }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5001/api/carbon", {
        userId,
        carbonSavedKg: parseFloat(amount),
      });
      setAmount("");
      alert("Entry saved!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Track Carbon Savings</h3>
      <input
        type="number"
        placeholder="Carbon saved (kg)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Save Entry</button>
    </div>
  );
};

export default CarbonForm;
