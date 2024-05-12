import { H2, P, ButtonPrimary } from "./../../Components";
import { svg } from "./../../assets";

export interface PropsCTA {
  openMenu: boolean;
}

const ilustration = svg.ilustrations;
const icons = svg.icons;

export const CallToAction = ({ openMenu }: PropsCTA) => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:m-0">
      <div className="mx-5 md:pl-6 md:pr-6 lg:mr-20">
        <H2 styles="md:text-start md:text-2xl">A Simple Bookmark Manager</H2>
        <div>
          <P styles="md:text-xs md:text-start">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </P>
        </div>

        <div className="flex justify-between mb-36 lg:justify-normal lg:gap-4">
          <ButtonPrimary
            type="typeTwo"
            width={151}
            children="Get it on Chrome"
          />
          <ButtonPrimary
            type="typeThree"
            width={151}
            children="Get it on Firefox"
          />
        </div>
      </div>
      <div className={`${openMenu ? "" : "relative"} w-full mb-12`}>
        <div className="absolute top-12 right-0 -z-50">
          <img src={icons["icon-rectangle-rigth"]} alt="icon rectangle" />
        </div>
        <div className="right-0 float-right">
          <img
            className="w-[400px]"
            src={ilustration["illustration-hero"]}
            alt="illustration hero"
          />
        </div>
      </div>
    </div>
  );
};
