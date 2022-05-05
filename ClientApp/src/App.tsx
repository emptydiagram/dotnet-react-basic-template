import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Demos</p>
      </header>
      <nav style={{ borderBottom: 'solid 1px', padding: '1rem 0' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/adder">Adder</Link> |{' '}
        <Link to="/snackbar">Snackbar</Link>
      </nav>
      <Outlet />
    </div>
  );
}
