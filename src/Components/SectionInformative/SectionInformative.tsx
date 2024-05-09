import { H2, P, ButtonPrimary } from "./../../Components";
import { svg } from "./../../assets";

const ilustration = svg.ilustrations;
const icons = svg.icons;

export const SectionInformative = () => {
  return (
    <div className="flex flex-col-reverse">
      <div className="mx-5 mt-8">
        <H2>Bookmark in one click</H2>
        <div>
          <P>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </P>
        </div>

        <div className="flex justify-center mb-36">
          <ButtonPrimary type="typeOne" children="More Info" />
        </div>
      </div>
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
    </div>
  );
};
