import React from "react"
import { Link } from "gatsby"
import Navbar from './Navbar';

const Layout = ({ children }) => {

  return (
    <>
      <Navbar hideTitle={false} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
