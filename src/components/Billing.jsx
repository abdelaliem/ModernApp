import React from "react";
import Card from "./Card";
import styles, { layout } from "../style";
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <Card
      id={`product`}
      h2={`Easily control your billing & invoicing.`}
      p={`Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.`}
      specialLayout={`${layout.sectionReverse} 	`}
      lastSection={
        <div className="flex flex-row mt-12 justify-center items-center">
          <img src={apple} className=" object-contain flex-1 cursor-pointer " alt="apple" />
          <img src={google} className=" object-contain flex-1 ml-8 cursor-pointer" alt="google" />
        </div> 
      }
    >
      <div className=" flex-1">
        <div className={`${layout.sectionImgReverse} `}>
          <img
            src={bill}
            alt="billing"
            className="h-[100%] w-[100%] relative z-[5]"
          />
        </div>
      </div>
    </Card>
  );
};

export default Billing;
