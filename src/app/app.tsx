"use client"; // only needed if you choose App Router
import React, { useEffect } from "react";

import {
  Admin,
  Resource,
  addRefreshAuthToDataProvider,
  addRefreshAuthToAuthProvider,
  ListGuesser,
  EditGuesser,
  localStorageStore,
  CustomRoutes,
  useAuthProvider,
  useStore,
  useGetIdentity,
} from "react-admin";
import { useQuery } from "react-query";

import {} from "ra-directus";
import { Route } from "react-router-dom";
import { QueryClient } from "react-query";

import Layout from "@/components/layout";
import organisations from "./organisations";
import addresses from "./addresses";
import contacts from "./contacts";
import businessUnits from "./businessUnits";
import anzsics from "./anzsics";
import engagements from "./engagements";
import { EngagementEdit } from "./engagements/engagementEdit";
import { Agenda } from "./engagements/agenda";
import { StrategicAnalysis } from "./engagements/strategicAnalysis";
import { SiteVisit } from "./engagements/siteVisit";
import { RiskAssessment } from "./engagements/riskAssessment";
import { OrgBusinessUnits } from "./organisations/orgBusinessUnits";
import { OrgAddresses } from "./organisations/orgAddresses";
import { OrgContacts } from "./organisations/orgContacts";
import AdminPage from "./admin/page";
import { Dashboard } from "./dashboard/dashboard";
import "./globals.css";
import { directusRefreshAuthToken, getDirectusProviders } from "ra-directus";
import { directusDataProvider } from "@/dataProvider/directusDataProvider";
import { directusAuthProvider } from "@/dataProvider/directusAuthProvider";

const directusApiUrl = "http://localhost:8055";
const refreshAuthToken = directusRefreshAuthToken(directusApiUrl);

// const { authProvider } = getDirectusProviders(directusApiUrl, {
//   getIdentityFullName: (user) => user.first_name + "  " + user.last_name, // Optional, defaults to `${user.last_name} ${user.first_name}`
// });

// const authProvider = directusAuthProvider(directusApiUrl);
// const dataProvider = directusDataProvider(directusApiUrl);

const authProviderRefresh = addRefreshAuthToAuthProvider(directusAuthProvider(directusApiUrl), refreshAuthToken);

const dataProvider = addRefreshAuthToDataProvider(directusDataProvider(directusApiUrl), refreshAuthToken);

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 10 * 1000, // 10 seconds
//     },
//   },
// });

const App = () => {
  return (
    <Admin
      // queryClient={queryClient}
      dataProvider={dataProvider}
      authProvider={authProviderRefresh}
      layout={Layout}
      dashboard={Dashboard}
      store={localStorageStore(undefined, "Assurance")}
    >
      <Resource name="engagements" list={engagements.list} recordRepresentation={(record) => `${record.name}`}>
        <Route path=":id/" element={<EngagementEdit />} />
        <Route path=":id/agenda" element={<Agenda />} />
        <Route path=":id/strategic-analysis" element={<StrategicAnalysis />} />
        <Route path=":id/site-visit" element={<SiteVisit />} />
        <Route path=":id/risk-assessment" element={<RiskAssessment />} />
      </Resource>
      <Resource name="organisations" {...organisations} recordRepresentation={(record) => `${record.name}`}>
        <Route path=":id/business_units" element={<OrgBusinessUnits />} />
        <Route path=":id/addresses" element={<OrgAddresses />} />
        <Route path=":id/contacts" element={<OrgContacts />} />
      </Resource>
      <CustomRoutes>
        <Route path="admin" element={<AdminPage />} />
      </CustomRoutes>
      <Resource name="business_units" {...businessUnits} recordRepresentation="name" />
      <Resource
        name="contacts"
        {...contacts}
        recordRepresentation={(record) => `${record.first_name} ${record.last_name}`}
      />
      <Resource name="anzsics" {...anzsics} recordRepresentation="label" />
      <Resource name="field_status" list={ListGuesser} edit={EditGuesser} />
      <Resource name="notes" list={ListGuesser} edit={EditGuesser} />
      <Resource name="addresses" {...addresses} recordRepresentation="street_address" />
    </Admin>
  );
};

export default App;

// import { Admin, Resource } from "react-admin";
// import { getDirectusProviders } from "ra-directus";
// import products from "./products";

// const { authProvider, dataProvider } = getDirectusProviders(
//   import.meta.env.VITE_DIRECTUS_URL,
//   {
//     storage: window.sessionStorage, // Optional, defaults to localStorage
//     getIdentityFullName: (user) => user.email, // Optional, defaults to `${user.last_name} ${user.first_name}`
//   }
// );

// const App = () => (
//   <Admin dataProvider={dataProvider} authProvider={authProvider}>
//     <Resource name="products" {...products} />
//   </Admin>
// );

// import KitchenIcon from "@mui/icons-material/Kitchen";

// import { ReactQueryDevtools } from "react-query/devtools";

// import { ConnectionWatcher } from "./ConnectionWatcher";
// import { authProvider } from "./authProvider";
// import customers from "./customers";
// import { dataProvider } from "./dataProvider";
// import products from "./products";
// import tickets from "./tickets";

// const App = () => (
//   <Admin
//     dataProvider={dataProvider}
//     authProvider={authProvider}
//     store={localStorageStore(undefined, "HelpDesk")}
//     title={
//       <Box display="flex" gap={1} alignItems="center">
//         <KitchenIcon /> Acme Refrigerator HelpDesk
//       </Box>
//     }
//     layout={MyLayout}
//   >
//     <Resource name="tickets" {...tickets} />
//     <Resource name="customers" {...customers} />
//     <Resource name="products" {...products} />
//     <Resource
//       name="agents"
//       recordRepresentation={(record) =>
//         `${record.firstName} ${record.lastName}`
//       }
//     />
//   </Admin>
// );

// export default App;
