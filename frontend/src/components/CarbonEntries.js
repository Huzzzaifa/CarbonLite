import React, { useEffect, useState } from "react";
import axios from "axios";

const CarbonEntries = ({ userId }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/carbon/userId/${userId}`)
    .then(response => {
        setEntries(response.data);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
  }, [userId])

  return (
    <div>
      <h3>Previous Entries</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            {entry.date?.slice(0, 10)} – {entry.carbonSavedKg} kg (
            {entry.valueEquivalent})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarbonEntries;
