import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Container maxWidth="sm">
      <div className="App">
        <header className="App-header">
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
          }}>
            <p>Demos</p>
          </Box>
        </header>
        <nav style={{ borderBottom: 'solid 1px', padding: '1rem 0' }}>
          <Link to="/invoices">Invoices</Link> |{' '}
          <Link to="/adder">Adder</Link> |{' '}
          <Link to="/snackbar">Snackbar</Link> |{' '}
          <Link to="/fetchdata">Fetch data</Link>
        </nav>
        <Outlet />
      </div>
    </Container>
  );
}
