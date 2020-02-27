import { FC } from "react";
import Head from "next/head";
import Header from "../../components/header";
import "../../styles/styles.scss";

const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main />
  </>
);

export default Home;
