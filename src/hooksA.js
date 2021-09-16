import { useState } from "react";

export default function HooksA() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
