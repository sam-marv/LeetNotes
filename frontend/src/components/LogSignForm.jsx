import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import './styles/logsign.css';
// TODO remove, this demo shouldn't need to reset the theme.

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color: 'aliceblue',
            '--TextField-brandBorderColor': '#fda116',
            '--TextField-brandBorderHoverColor': '#fda116',
            '--TextField-brandBorderFocusedColor': '#fda116',
            '& label.Mui-focused': {
              color: '#fda116',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: '#fda116',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: '#fce14b',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: '#fda116',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid #fda116',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid #fda116',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid #fda116',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid #fda116',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid #fda116',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid #fda116',
            },
          },
        },
      },
    },
  });

export default function LogSignForm({
  handleSubmit,
  link,
  type,
  condition,
  onChange,
}) {
  const outerTheme = useTheme();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#fda116' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {type}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          onChange={onChange}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputProps={{
                style: {
                  color: 'aliceblue',
                },
              }}
            />
            <TextField
              className="field"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: {
                  color: 'aliceblue',
                },
              }}
            />
          </ThemeProvider>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#fda116',
              color: 'black',
              '&:hover': {
                backgroundColor: '#fce14b',
              },
            }}
          >
            {type}
          </Button>
          <Grid container>
            <Grid item>
              <Link style={{ fontSize: '15px', color: '#fda116' }} to={link}>
                {condition}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
