import React, { Suspense, HtmlHTMLAttributes, ReactNode } from 'react';
import { CssBaseline, Container, Grid } from '@mui/material';
import { CoreLayoutProps, CheckForApplicationUpdate } from 'react-admin';
import { ErrorBoundary } from 'react-error-boundary';

import { Error, Loading } from 'react-admin';
const SideMenuLayout = ({ children, Menu }: { children: any, Menu: JSX.Element}) => (
  <Grid container spacing={2}>
    <Grid item xs={6} sm={2}>
      {Menu}
    </Grid>
    <Grid item xs={6} sm={9}>
      <main id="main-assurance-content">
        {/* @ts-ignore */}
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </main>
    </Grid>
    <Grid item xs={6} sm={1}>
    </Grid>
  </Grid>
);


export default SideMenuLayout;