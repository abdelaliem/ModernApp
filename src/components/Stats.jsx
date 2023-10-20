import React from "react";
import { stats } from "../constants";
import styles from "../style";

function Stats() {
  return (
    <section className={` ${styles.flexCenter} px-6 sm:px-16 font-poppins sm:mb-20 mb-6 flex-wrap flex-row`}>
      {stats.map((i) => (
        <div key={i.id} className="flex flex-1 items-center justify-start m-3  flex-wrap">
          <h4 className=" text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{i.value}</h4> 
          <p className="text-gradient xs:text-[20px] text-[15px] font-normal xs:leading-[26px] leading-[21px] uppercase ml-3">{i.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
