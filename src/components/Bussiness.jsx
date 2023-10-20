import { layout } from "../style";
import { features } from "../constants";
import FeatureCard from "./FeatureCard";
import Card from "./Card";
import Button from './Button'

function Bussiness() {
  return (
    <Card
    id={`features`}
      specialLayout={layout.section}
      h2={
        <>
          You do the business
          <br className=" xs:block hidden" />
          we’ll handle the money.{" "}
        </>
      }
      p={
        <>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </>
      }
      lastSection={<Button styles="mt-10">Get Started </Button>}
    >
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>{" "}
    </Card>
  );
}

export default Bussiness;
//

/*  */
