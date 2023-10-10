"use client";

import React from "react";
import {
  useAddressesSearchQuery,
 } from "../../store/api";
import Layout from '../layout';


function Home() {
  const { data, isLoading, error } = useAddressesSearchQuery();

  let content = null;

  if (isLoading) {
    content = <div > Please wait ............ </div>;
  }

  if (error) {
    content = (
      <div>
        {" "}
        Something went wrong, Please retry after some time{" "}
      </div>
    );
  }

  if (data) {
    content = (
      <>
        <h1 className="flex items-center justify-between p-3">Sad Little List of Adresses on this page too</h1>
        <div >
          <ol>
            {data?.map((d, index) => (
              <li key={index} className="">
                {d.id} {d.streetAddress}, {d.city}
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  }

  return <Layout>{content}</Layout>;
}

export default Home;