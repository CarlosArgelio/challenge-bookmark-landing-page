import { svg } from "./../../assets";
import { ButtonPrimary, P } from "./../../Components";

export interface Prop {
  logo: string;
}

const utils = svg.utils;

export const Card = ({ logo }: Prop) => {
  return (
    <>
      <div className="flex flex-col items-center mb-10 w-[280px] h-[371px] mx-12 rounded-2xl shadow-lg">
        <div className="mt-12 mb-8">
          <img src={logo} alt="Icon" />
        </div>
        <div className="mb-6">
          <h3 className="text-xl text-center font-medium">Title</h3>
          <P>Version Soported</P>
        </div>

        <img className="mb-3" src={utils["bg-dots"]} alt="Icon" />

        <ButtonPrimary type="typeFor" children="Add & Install Extension" />
      </div>
    </>
  );
};
