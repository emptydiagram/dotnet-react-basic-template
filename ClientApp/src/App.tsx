import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Demo</p>
      </header>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/adder">Adder</Link>
      </nav>
      <Outlet />
    </div>
  );
}
