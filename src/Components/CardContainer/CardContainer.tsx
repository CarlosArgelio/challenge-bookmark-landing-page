import { Card, H2, P } from "./../../Components";
import { svg } from "./../../assets";

const logos = svg.logos;

export const CardContainer = () => {
  return (
    <div className="mb-36">
      <H2>Download the extension</H2>
      <P>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </P>

      <Card logo={logos["logo-chrome"]} />
      <Card logo={logos["logo-firefox"]} />
      <Card logo={logos["logo-opera"]} />
    </div>
  );
};
