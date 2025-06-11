import React, { useState } from "react";
import CreateUser from "./components/CreateUser";
import CarbonForm from "./components/CarbonForm";
import CarbonEntries from "./components/CarbonEntries";

function App() {
  const [userId, setUserId] = useState("");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>CarbonLite 🌱</h1>
      <CreateUser setUserId={setUserId} />
      {userId && (
        <>
          <CarbonForm userId={userId} />
          <CarbonEntries userId={userId} />
        </>
      )}
    </div>
  );
}

export default App;

