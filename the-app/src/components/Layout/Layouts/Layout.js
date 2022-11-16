import React from "react";
import Food from "../../../components/Food";
import Footer from "../../../components/Footer";



function Layout(props) {
  return (
    <div>
      <Food />
      
      
    
      <main>{props.children}</main>

      <Footer />
      
    </div>
  );
}

export default Layout;
