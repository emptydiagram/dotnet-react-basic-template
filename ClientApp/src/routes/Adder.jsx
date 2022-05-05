import React, { useState } from 'react';

import Button from '@mui/material/Button';

export default function Adder() {
  let [value, setValue] = useState(0);
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Add</h2>
      <Button variant="contained" onClick={() => setValue(value + 1)}>↑</Button>
      <span style={{ padding: '2rem'}}>{value}</span>
      <Button variant="contained" onClick={() => setValue(value - 1)}>↓</Button>
    </main>
  );
}
