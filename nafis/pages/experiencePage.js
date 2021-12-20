import React, { useState } from "react";
import Navbar from "./left_navbar";
export default function Experience() {
  const [bool, setbool] = useState(true);
  function seeMore() {
    let heightVal = document.querySelector(".text_inside_div").clientHeight;
    console.log(heightVal);
    setbool(false);
    console.log("hellow world");
    if (bool === false) {
      document.querySelector(".text_").style.height = "181px";
      document.querySelector("._btn_").innerHTML = "< Less";
      setbool(true);
    }
    if (bool === true) {
      document.querySelector(".text_").style.height = "110px";
      document.querySelector("._btn_").innerHTML = "more >";
    }
  }
  return (
    <>
      <div className='father_expo'>
        <Navbar />
        <div className="container_exp">
          <div className="image_exp">
            <img src="/bg1.jpg" />
            <div className="text_exp">
              <p>Enroll the courses now!</p>
              <button className="textBt_exp">Enroll</button>
            </div>
          </div>
          <div className="experience_exp">
            <div className="experience_detail_exp">
              <div className="img_div">
                <img src="/ps.png" />
              </div>
              <div className="text_">
                <div className="text_inside_div">
                  lkfsldkghalsdfgkasd;asd;sdfsfadfasdfgsadfasdgsdfasfsafsfdasdfasdfsadfsdakfjsadl;fjsldkfjsldkfhls;kdhfsldkflsadfjl
                </div>
              </div>
              <button className="_btn_" onClick={seeMore}>
                more >
              </button>
            </div>

            <div className="experience_detail_exp">
              <div className="img_div">
                <img src="/ps.png" />
              </div>
              <div className="text_">
                <div className="text_inside_div">
                  lkfsldkghalsdfgkasd;asd;sdfsfadfasdfgsadfasdgsdfasfsafsfdasdfasdfsadfsdakfjsadl;fjsldkfjsldkfhls;kdhfsldkflsadfjl
                </div>
              </div>
              <button className="_btn_" onClick={seeMore}>
                more >
              </button>
            </div>

            <div className="experience_detail_exp">
              <div className="img_div">
                <img src="/ps.png" />
              </div>
              <div className="text_">
                <div className="text_inside_div">
                  lkfsldkghalsdfgkasd;asd;sdfsfadfasdfgsadfasdgsdfasfsafsfdasdfasdfsadfsdakfjsadl;fjsldkfjsldkfhls;kdhfsldkflsadfjl
                </div>
              </div>
              <button className="_btn_" onClick={seeMore}>
                more >
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
