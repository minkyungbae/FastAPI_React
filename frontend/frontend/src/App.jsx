import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>FastAPI + React 연습</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
