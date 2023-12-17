import React from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from 'state/authslice'; // Update this path
import { setUserId } from 'state';

import {
  Button,
  TextField,
  Checkbox,
  Typography,
  Grid,
  Container,
  Box,
  FormControlLabel,
  Link,
  useTheme,
} from '@mui/material';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await fetch('http://localhost:3500/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      // console.log(result.user._id);

      if (response.ok) {
        const token = result.token;
        const userId = result.user._id;
        const profilePicture = result.user.profilePicture.data.data;
        console.log(profilePicture);
        localStorage.setItem('token', token);
        dispatch(setUserId(userId));
        dispatch(loginSuccess({ token, userId }));
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      console.error('Authentication error:', error);
      // Dispatch loginFailure action in case of an error
      dispatch(loginFailure());
    }
  };

  // const theme = useTheme();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box m="1.5rem 2rem 2rem 3rem">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="h4" fontWeight="bold">
              INSIGHTIFY
            </Typography>
          </Box>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {/* Your existing form fields */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {/* Your existing links */}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
