import { svg } from "./../../assets";

const logos = svg.logos;
const icons = svg.icons;

export const Footer = () => {
  return (
    <footer className="bg-very-dark-blue h-[334px] md:h-full">
      <div className="flex flex-col items-center justify-center p-5 md:flex-row md:p-0">
        <div className="mb-10 md:m-5">
          <img src={logos["logo-bookmark-bg-text-white"]} alt="logo bookmark" />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 mb-10 text-white tracking-wider md:flex-row md:m-5">
          <p className="md:hover:text-soft-red">Features</p>
          <p className="md:hover:text-soft-red">Pricing</p>
          <p className="md:hover:text-soft-red">Contact</p>
        </div>

        <div className="flex gap-10">
          <img src={icons["icon-facebook"]} alt="icon facebook" />
          <img src={icons["icon-twitter"]} alt="icon twitter" />
        </div>
      </div>
    </footer>
  );
};
