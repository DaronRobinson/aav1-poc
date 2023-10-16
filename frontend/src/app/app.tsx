"use client"; // only needed if you choose App Router
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  fetchUtils,
  localStorageStore,
  CustomRoutes
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
import AdminPage  from './admin/page';
import { Dashboard } from './dashboard/dashboard';
import './globals.css';

//import { authProvider } from '../../../unused/api/authProvider';

import raStrapiRest from "../dataProvider/ra-strapi-rest";
const strapiApiUrl = "http://localhost:1337/api";

const httpClient = (url: string, options: any = {}) => {
  options.headers = options.headers || new Headers({ Accept: "application/json" });
  options.headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);


const App = () => (
  <Admin dataProvider={dataProvider} layout={Layout} dashboard={Dashboard} >
    <Resource
      name="assurances"
      list={assurances.list}
      recordRepresentation={(record) => `${record.name}`}>
      <Route path=":id/" element={<AssuranceEdit />} />
      <Route path=":id/agenda" element={<Agenda />} />
      <Route path=":id/strategic-analysis" element={<StrategicAnalysis />} />
      <Route path=":id/site-visit" element={<SiteVisit />} />
      <Route path=":id/risk-assessment" element={<RiskAssessment />} />
    </Resource>
    <Resource name="organisations" {...organisations} recordRepresentation={(record) => `${record.name}`} >
      <Route path=":id/business-units" element={<OrgBusinessUnits />} />
      <Route path=":id/addresses" element={<OrgAddresses />} />
      <Route path=":id/contacts" element={<OrgContacts />} />
    </Resource>
    <CustomRoutes>
      <Route path="admin" element={<AdminPage />} />
    </CustomRoutes>
    <Resource
      name="business-units"
      {...businessUnits}
      recordRepresentation="name"
    />
    <Resource
      name="contacts"
      {...contacts}
      recordRepresentation={(record) => `${record.firstName} ${record.lastName}`}
    />
    <Resource
      name="anzsics"
      {...anzsics}
      recordRepresentation="label"
    />
    <Resource
      name="addresses"
      {...addresses}
      recordRepresentation="streetAddress"
    />
  </Admin>
);

export default App;


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