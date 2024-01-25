import React, { Suspense, HtmlHTMLAttributes } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { CoreLayoutProps, CheckForApplicationUpdate } from 'react-admin';
import { ErrorBoundary } from 'react-error-boundary';

import { Error, Loading } from 'react-admin';
import Header from './header';

const Layout = ({ children }: LayoutProps) => (
  <>
    <CssBaseline />
    <Header />
    <Container sx={{ width: "80%", margin: "0 auto", maxWidth: { xl: 3200} }}>
      <main id="main-content">
        {/* @ts-ignore */}
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </main>
    </Container>
    <CheckForApplicationUpdate interval={30 * 1000} />
  </>
);

export interface LayoutProps
  extends CoreLayoutProps,
  Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> { }

export default Layout;