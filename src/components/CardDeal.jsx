import React from "react";
import Card from "./Card";
import Button from "./Button";
import{ layout } from "../style";
import{ card } from "../assets";

function cardDeal() {
  return (
    <Card
      id={`feature`}
      h2={`Find a better card deal in few easy steps.`}
      p={`Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.`}
      lastSection={<Button styles="mt-10">Get Started</Button>}
      specialLayout={layout.section}
    >
      <div className={`${layout.sectionImg} xs:mt-20 mt-10`}>
        <img src={card} alt="card" />
      </div>
    </Card>
  );
}

export default cardDeal;
