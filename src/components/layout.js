import Head from "next/head";
import Footer from "./footer";
// import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <Head>
        <title>Elf Curriculum </title>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/img/Favicon.png" sizes="80x30"/>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
