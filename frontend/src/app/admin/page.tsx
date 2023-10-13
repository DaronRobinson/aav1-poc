import { NextPage } from "next";
import dynamic from "next/dynamic";
// const AdminApp = dynamic(() => import("./AdminApp"), { ssr: false });

const Admin: NextPage = () => {
  return <div>An admin system that allows editing of each entity type</div>
};

export default Admin;

