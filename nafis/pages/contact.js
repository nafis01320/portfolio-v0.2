import React from "react";
import Navbar from "./left_navbar";
export default function Contact() {
  return (
    <>
      <div className="container_con">
        <Navbar />
        
          <div className="child_container_con">
            <section className="form">
              <form>
                <input className="element_con" type="text" />
                <input className="element_con" type="text" />
                <button className="element_con submitBtn">Submit</button>
              </form>
            </section>
            <div className="emailTxt">E-mail : nfs0199@gmail.com</div>
          </div>
        
      </div>
    </>
  );
}
