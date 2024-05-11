import { H2, P, ButtonPrimary } from "./../../Components";
import { svg } from "./../../assets";

const ilustration = svg.ilustrations;
const icons = svg.icons;

export const SectionInformative = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative mb-12">
        <div className="absolute top-[2.2rem] left-0 -z-50">
          <img src={icons["icon-rectangle-left"]} alt="icon rectangle" />
        </div>
        <div className="w-[311px] h-[201px] ml-8 z-40">
          <img
            src={ilustration["illustration-features-tab-1"]}
            alt="illustration hero"
          />
        </div>
      </div>
      <div className="mx-5 mt-8">
        <H2 styles="md:text-start md:text-2xl">Bookmark in one click</H2>
        <div>
          <P styles="md:text-xs md:text-start">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </P>
        </div>

        <div className="flex justify-center md:justify-start mb-36">
          <ButtonPrimary type="typeOne" children="More Info" />
        </div>
      </div>
    </div>
  );
};
