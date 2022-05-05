import React, { useState } from 'react';

export default function Adder() {
  let [value, setValue] = useState(0);
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Add</h2>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>↑</button>
      <button onClick={() => setValue(value - 1)}>↓</button>
    </main>
  );
}
