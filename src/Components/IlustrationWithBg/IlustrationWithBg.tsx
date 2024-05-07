import { BackGroundArrow } from "./../../Components";
import { svg } from "./../../assets";

const ilustration = svg.ilustrations;

export const IlustrationWithBg = () => {
  return (
    <>
      <img src={ilustration["illustration-hero"]} alt="illustration hero" />
      <div>IlustrationWithBg</div>
      <BackGroundArrow />
    </>
  );
};
