import React, { useState } from "react";
import axios from "axios";

const CreateUser = ({ setUserId }) => {
  const [username, setUsername] = useState("");

  const handleCreate = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/users", {
        username,
        email: `${username}@example.com`,
        bio: "Auto-generated",
      });
      setUserId(res.data._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Create User</h3>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateUser;
