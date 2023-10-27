import { NextPage } from "next";
import dynamic from "next/dynamic";
 const AdminApp = dynamic(() => import("./adminApp"), { ssr: false });

const AdminPage: NextPage = () => <AdminApp />;

export default AdminPage;

