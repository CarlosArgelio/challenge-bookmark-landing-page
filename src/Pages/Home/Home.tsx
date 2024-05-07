import {
  Attribute,
  Header,
  IlustrationWithBg,
  CallToAction,
  SliceContainer,
  SectionInformative,
  CardContainer,
  Faqs,
  SectionSendEmail,
} from "./../../Components";

export const Home = () => {
  return (
    <>
      <Header />
      <IlustrationWithBg />

      <CallToAction />

      <SliceContainer />

      <SectionInformative />

      <CardContainer />

      <Faqs />

      <SectionSendEmail />

      <Attribute />
    </>
  );
};
