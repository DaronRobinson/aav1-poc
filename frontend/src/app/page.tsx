import { NextPage } from "next";
import dynamic from "next/dynamic";
const MainApp = dynamic(() => import("./app"), { ssr: false });

const Home: NextPage = () => <MainApp />;

export default Home;