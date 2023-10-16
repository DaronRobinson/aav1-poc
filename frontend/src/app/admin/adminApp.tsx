"use client"; // only needed if you choose App Router
import {
  fetchUtils,
} from "react-admin";

import { Box, Typography } from "@mui/material";




import raStrapiRest from "../../dataProvider/ra-strapi-rest";
const strapiApiUrl = "http://localhost:1337/api";

const httpClient = (url: string, options: any = {}) => {
  options.headers = options.headers || new Headers({ Accept: "application/json" });
  options.headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);


const AdminApp = () => (
  <Box>
     <Box><Typography sx={{ fontSize: '28px', fontWeight: '600', paddingTop: '24px', marginBottom: "-20px" }}> Admin Pages</Typography></Box>
    <Box sx={{ marginTop: '20px' }}>This area will allow creation, deletion and updating of things all items by Admins, including system data like values in dropdowns, anzscis etc.
      <br />It will only be visiible to approved users.</Box>
  </Box>
);

export default AdminApp;

