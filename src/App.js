import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { themeSettings } from 'theme';
import Layout from 'components/layout';
import Dashboard from 'components/dashboard';
import Login from 'pages/Login';
import Products from "components/Products"
import Customers from "components/Customers"
import Transactions from "components/Transactions"

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // Access login state from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/productmanagement" element={<Products />} />
              <Route path="/customermanagement" element={<Customers />} />
              <Route path="/transactionmanagement" element={<Transactions />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
