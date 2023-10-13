import React from 'react';
import { Tabs, Tab, Toolbar, AppBar, Box, Typography } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { UserMenu, Logout, LoadingIndicator } from 'react-admin';

const Header = () => {
  const location = useLocation();

  let currentPath = '/';
  if (!!matchPath('/contacts/*', location.pathname)) {
    currentPath = '/contacts';
  } else if (!!matchPath('/organisations/*', location.pathname)) {
    currentPath = '/organisations';
  } else if (!!matchPath('/assurances/*', location.pathname)) {
    currentPath = '/assurances';
  } else if (!!matchPath('/addresses/*', location.pathname)) {
    currentPath = '/addresses';
  } else if (!!matchPath('/anzsics/*', location.pathname)) {
    currentPath = '/anzsics';
  } else if (!!matchPath('/business-units/*', location.pathname)) {
    currentPath = '/business-units';
  }

  return (
    <Box component="nav" sx={{ flexGrow: 1}}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense" sx={{ width: "80%", margin: "5px auto", maxWidth: { xl: 3200 } }}>
          <Box flex={1} display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                sx={{ marginRight: '1em', height: 30 }}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                }
                alt="Bosch Logo"
              />
              <Typography component="span" variant="h5">
                Assurance Demo
              </Typography>
            </Box>
            <Box>
              <Tabs
                value={currentPath}
                aria-label="Navigation Tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Dashboard'}
                  component={Link}
                  to="/"
                  value="/"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Engagements'}
                  component={Link}
                  to="/assurances"
                  value="/assurances"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Organisations'}
                  component={Link}
                  to="/organisations"
                  value="/organisations"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Business Units'}
                  component={Link}
                  to="/business-units"
                  value="/business-units"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Contacts'}
                  component={Link}
                  to="/contacts"
                  value="/contacts"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Addresses'}
                  component={Link}
                  to="/addresses"
                  value="/addresses"
                />
                <Tab
                  sx={{ fontSize: "16px" }}
                  label={'Anzsic Codes'}
                  component={Link}
                  to="/anzsics"
                  value="/anzsics"
                />
              </Tabs>
            </Box>
            <Box display="flex">
              <LoadingIndicator
                sx={{
                  '& .RaLoadingIndicator-loader': {
                    marginTop: 2,
                  },
                }}
              />
              <UserMenu>
                <Logout />
              </UserMenu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;