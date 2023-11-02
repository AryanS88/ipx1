import React, { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) {
        throw new Error("Network request failed");
      }

      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching user data. Please try again.");
      setUserData(null);
    }
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Fetch User Data</h1>
      <input type="text" value={userId} onChange={handleUserIdChange} />
      <button onClick={handleSubmit}>Submit</button> {/* Submit button */}
      {error ? <div>{error}</div> : null}
      {userData ? (
        <div>
          <h2>User Information</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user data fields here */}
        </div>
      ) : null}
    </div>
  );
}

export default App;
