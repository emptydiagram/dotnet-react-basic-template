import React, { useState } from 'react';

import Button from '@mui/material/Button';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarDemo() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // TODO

  const [severity, setSeverity] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSeverity(event.target.value as string);
  };

  const alertMessage = `This is a${severity.startsWith('aeiou') ? 'n' : ''} ${severity} message!`;
  const alertBySeverity = () => {
    switch(severity) {
      case 'error':
        return <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>;
      case 'warning':
        return <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>;
      case 'info':
        return <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>;
      case 'success':
        return <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>;
      default:
        let msg = `alertBySeverity: unexpected severity, '${severity}'`;
        console.log(msg);
        return <div></div>;
    }
  }

  return (
    <>
    <FormControl sx={{minWidth: 110}}>
      <InputLabel id="demo-simple-select-label">Severity</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={severity}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value="error">error</MenuItem>
        <MenuItem value="warning">warning</MenuItem>
        <MenuItem value="info">info</MenuItem>
        <MenuItem value="success">success</MenuItem>
      </Select>
    </FormControl>

    <Button variant="outlined" onClick={handleClick} sx={{minHeight: '3.5rem'}} disabled={severity === ''}>
      Open snackbar
    </Button>

    <Stack spacing={2} sx={{ width: '100%' }}>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </Stack>

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      {alertBySeverity()}
    </Snackbar>
    </>
  );
}