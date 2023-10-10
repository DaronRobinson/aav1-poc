// in src/components/AdminApp.jsx
"use client"; // only needed if you choose App Router
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import simpleRestProvider from 'ra-data-simple-rest';
//import dataProvider from "../store/dataProvider";
// import postgrestRestProvider from "@raphiniert/ra-data-postgrest";
// const dataProvider = postgrestRestProvider("/api/admin");

// import { dataProvider } from '../api/dataProvider.js';
import { authProvider } from '../api/authProvider';

// export const MyAdmin = () => (
//   <Admin dataProvider={dataProvider} authProvider={authProvider}>
//     <Resource name="posts" list={ListGuesser} />
//     <Resource name="authors" list={ListGuesser} />
//   </Admin>
// );//

//console.log(dataProvider.getList('users', { pagination: { page: 1, perPage: 10 }, sort: { field: 'id', order: 'ASC' }, filter: {} }));

//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

import raStrapiRest from "../store/ra-strapi-rest";
const strapiApiUrl = "http://localhost:1337/api";

const httpClient = (url: string, options: any = {}) => {
  options.headers = options.headers || new Headers({ Accept: "application/json" });
  options.headers.set("Authorization", `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);



const AdminApp = () => (
  <Admin dataProvider={dataProvider} >
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="firstName"
    />
    <Resource
      name="addresses"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="streetAddress"
    />
    <Resource name="organisations" list={ListGuesser} edit={EditGuesser} />
    <Resource
      name="business-units"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="contacts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="firstName"
    />
    <Resource
      name="anzsics"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="anzsicCode"
    />
  </Admin>
);

export default AdminApp;