import { svg } from "./../../assets";
import { ButtonPrimary } from "./../../Components";

const utils = svg.utils;

export const Card = () => {
  return (
    <>
      <div>
        <img src={""} alt="Icon" />
        <h3>Title</h3>
        <p>Version Soported</p>
        <img src={utils["bg-dots"]} alt="Icon" />

        <ButtonPrimary type="typeOne" children="Add & Install Extension" />
      </div>
    </>
  );
};
