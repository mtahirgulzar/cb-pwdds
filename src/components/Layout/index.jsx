import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, SeoData, data, navServices }) => {
  return (
    <>
      {SeoData && <Header data={SeoData} />}
      <div className="flex flex-col justify-between">
        <Navbar data={data?.header} navServices={navServices} />
        <div className="flex-1">{children}</div>
        <Footer data={data?.footer} />
      </div>
    </>
  );
};

export default Layout;
