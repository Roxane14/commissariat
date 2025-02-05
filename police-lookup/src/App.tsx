import { useState } from "react";
import "./App.css"; // Import the CSS file

const correctName = "John Doe"; // Replace with the actual criminal name

export default function PoliceLookup() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleCheck = () => {
    if (name.trim().toLowerCase() === correctName.toLowerCase()) {
      setMessage("✅ Criminal found! Justice will be served.");
    } else {
      setMessage("❌ No match found. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="lookup-box">
        <h1>Police Criminal Lookup</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleCheck}>Check</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
