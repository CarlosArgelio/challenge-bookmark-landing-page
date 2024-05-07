import { svg } from "./../../assets";

const icons = svg.icons;
const logos = svg.logos;

export const Header = () => {
  return (
    <header>
      <img src={logos["logo-bookmark"]} alt="logo bookmark" />
      <img src={icons["icon-hamburger"]} alt="icon hamburger" />
      Features
      <br />
      Pricing
      <br />
      Contact
      <br />
      Login
      <br />
    </header>
  );
};
