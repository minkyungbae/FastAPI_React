import { useState } from "react";

// ---------------------------------
// 랜덤 숫자 실행하는 버튼 생성
function RandomApp() {
  const [number, setNumber] = useState(null);

  const getRandomNumber = async () => {
    const res = await fetch("http://localhost:8000/random?start=1&end=1000");
    const data = await res.json();
    setNumber(data.number);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>랜덤 숫자 뽑기 🎲</h1>

      <button onClick={getRandomNumber}>
        Go!!
      </button>

      {number !== null && (
        <p style={{ fontSize: "24px" }}>
          바로바로~!~! {number}!!
        </p>
      )}
    </div>
  );
}

export default RandomApp;
