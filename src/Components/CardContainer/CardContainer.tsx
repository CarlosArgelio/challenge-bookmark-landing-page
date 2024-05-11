import { Card, H2, P } from "./../../Components";
import { svg } from "./../../assets";

const logos = svg.logos;

export const CardContainer = () => {
  return (
    <div className="mb-36 md:mx-14">
      <div>
        <H2>Download the extension</H2>
        <P>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </P>
      </div>
      <div className="flex items-center flex-col">
        <Card
          logo={logos["logo-chrome"]}
          title="Add to Chrome"
          version="Minimum version 62"
        />
        <Card
          logo={logos["logo-firefox"]}
          title="Add to Firefox"
          version="Minimum version 55"
        />
        <Card
          logo={logos["logo-opera"]}
          title="Add to Opera"
          version="Minimum version 46"
        />
      </div>
    </div>
  );
};
