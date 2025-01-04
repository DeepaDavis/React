import React from "react";
import "./Page4.css";
import { FaShippingFast } from "react-icons/fa";
import { AiTwotoneGold } from "react-icons/ai";
import { FaEarthAsia } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Page4 = () => {
  return (
    <div>
      <div className="page4Container">
        <h1 className="page4Head">The <i>value</i> in what we offer</h1>

        <div className="page4Parent">
          
          <div className="child1">
            <div className="roundDiv">  <FaShippingFast size="40px" color="#f0debb"   />  </div>
            <p className="page4IconText">International tracked shipping</p>
          </div>

          <div className="child2">
            <div className="roundDiv">             <AiTwotoneGold  size="40px" color="#f0debb"  /> </div>
            <p className="page4IconText">18K Gold and Recycled Silver</p>
          </div>

          <div className="child3">
            <div className="roundDiv">   <FaEarthAsia size="40px" color="#f0debb"  />            </div>
            <p className="page4IconText">
              Sustainable and ethically-<br></br>sourced and produced
            </p>
          </div>

          <div className="child4">
            <div className="roundDiv"> <FaCalendarAlt size="40px" color="#f0debb" /> </div>
            <p className="page4IconText">Handcrafted with2-year warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
