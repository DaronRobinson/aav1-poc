"use client"; // only needed if you choose App Router
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  fetchUtils,
  localStorageStore,
  CustomRoutes,
} from "react-admin";
import { Route } from "react-router-dom";

import { Box } from "@mui/material";

import Layout from "@/components/layout";
import organisations from "./organisations";
import addresses from "./addresses";
import contacts from "./contacts";
import businessUnits from "./businessUnits";
import anzsics from "./anzsics";
import assurances from "./assurances";
import { AssuranceEdit } from "./assurances/assuranceEdit";
import { Agenda } from "./assurances/agenda";
import { StrategicAnalysis } from "./assurances/strategicAnalysis";
import { SiteVisit } from "./assurances/siteVisit";
import { RiskAssessment } from "./assurances/riskAssessment";
import { OrgBusinessUnits } from "./organisations/orgBusinessUnits";
import { OrgAddresses } from "./organisations/orgAddresses";
import { OrgContacts } from "./organisations/orgContacts";
import AdminPage from "./admin/page";
import { Dashboard } from "./dashboard/dashboard";
import "./globals.css";
import { getDirectusProviders } from "ra-directus";
import { directusDataProvider } from "ra-directus";

//import { authProvider } from '../../../unused/api/authProvider';

import raStrapiRest from "../dataProvider/ra-strapi-rest";
const strapiApiUrl = "http://localhost:1337/api";

const directusApiUrl = "http://localhost:8055";

// http: const httpClient = (url: string, options: any = {}) => {
//   options.headers =
//     options.headers || new Headers({ Accept: "application/json" });
//   options.headers.set(
//     "Authorization",
//     `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
//   );
//   return fetchUtils.fetchJson(url, options);
// };

// export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);

const { authProvider, dataProvider } = getDirectusProviders(
  directusApiUrl
  //{
  //   storage: window.sessionStorage, // Optional, defaults to localStorage
  //   getIdentityFullName: (user) => user.email, // Optional, defaults to `${user.last_name} ${user.first_name}`
  // }
);
const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    layout={Layout}
    dashboard={Dashboard}
  >
    <Resource
      name="engagements"
      list={assurances.list}
      recordRepresentation={(record) => `${record.name}`}
    >
      <Route path=":id/" element={<AssuranceEdit />} />
      <Route path=":id/agenda" element={<Agenda />} />
      <Route path=":id/strategic-analysis" element={<StrategicAnalysis />} />
      <Route path=":id/site-visit" element={<SiteVisit />} />
      <Route path=":id/risk-assessment" element={<RiskAssessment />} />
    </Resource>
    <Resource
      name="organisations"
      {...organisations}
      recordRepresentation={(record) => `${record.name}`}
    >
      <Route path=":id/business_units" element={<OrgBusinessUnits />} />
      <Route path=":id/addresses" element={<OrgAddresses />} />
      <Route path=":id/contacts" element={<OrgContacts />} />
    </Resource>
    <CustomRoutes>
      <Route path="admin" element={<AdminPage />} />
    </CustomRoutes>
    <Resource
      name="business_units"
      {...businessUnits}
      recordRepresentation="name"
    />
    <Resource
      name="contacts"
      {...contacts}
      recordRepresentation={(record) =>
        `${record.first_name} ${record.last_name}`
      }
    />
    <Resource name="anzsics" {...anzsics} recordRepresentation="label" />
    <Resource
      name="addresses"
      {...addresses}
      recordRepresentation="street_address"
    />
  </Admin>
);

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
