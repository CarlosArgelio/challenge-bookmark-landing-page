import { H2, P } from "./../../Components";
import { svg } from "./../../assets";

const ilustration = svg.ilustrations;
const icons = svg.icons;

export const CallToAction = () => {
  return (
    <div className="flex flex-col-reverse">
      <div className="border border-red-700">
        <H2>A Simple Bookmark Manager</H2>
        <div className="border border-blue-700 left-1">
          <P>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </P>
        </div>

        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
      <div className="mb-12">
        <div className="absolute top-[12.2rem] right-0 -z-50">
          <img src={icons["icon-rectangle-rigth"]} alt="icon rectangle" />
        </div>
        <div className="z-40">
          <img src={ilustration["illustration-hero"]} alt="illustration hero" />
        </div>
      </div>
    </div>
  );
};
