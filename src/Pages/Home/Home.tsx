import { useState } from "react";
import {
  Attribute,
  Header,
  CallToAction,
  SliceContainer,
  SectionInformative,
  CardContainer,
  Faqs,
  SectionSendEmail,
  Footer,
} from "./../../Components";

export const Home = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <>
      <Header
        openMenu={openMenu}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
      />

      <CallToAction openMenu={openMenu} />

      <SliceContainer />

      <SectionInformative />

      <CardContainer />

      <Faqs />

      <SectionSendEmail />

      <Footer />

      <Attribute />
    </>
  );
};
