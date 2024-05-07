import { svg } from "./../../assets";

const logos = svg.logos;
const icons = svg.icons;

export const Footer = () => {
  return (
    <footer className="bg-very-dark-blue">
      <img src={logos["logo-bookmark-bg-text-white"]} alt="logo bookmark" />

      <p>Features</p>
      <p>Pricing</p>
      <p>Contact</p>

      <div>
        <img src={icons["icon-facebook"]} alt="icon facebook" />
        <img src={icons["icon-twitter"]} alt="icon twitter" />
      </div>
    </footer>
  );
};
