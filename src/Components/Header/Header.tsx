import { svg } from "./../../assets";

const icons = svg.icons;
const logos = svg.logos;

const styles = {
  lineGray: "h-[1px] bg-[#9194A2]",
};

export const Header = () => {
  return (
    <header className="ml-8 mr-8 mt-10 mb-20 ">
      <div className="flex items-center justify-between w-[311px] h-[25px]">
        <img src={logos["logo-bookmark"]} alt="logo bookmark" />
        <img src={icons["icon-hamburger"]} alt="icon hamburger" />
      </div>

      {/* Menu */}
      <div className=" absolute bg-very-dark-blue left-0 top-0 w-full h-full opacity-80 ">
        <div className="ml-8 mr-8 mt-10 mb-20">
          <div className="flex items-center justify-between w-[311px] h-[25px]">
            {/* Logo BookMark */}
            <img
              src={logos["logo-bookmark-bg-white"]}
              alt="logo bookmark bg white"
            />

            {/* Icon X */}
            <img src={icons["icon-x-white"]} alt="icon x white" />
          </div>
        </div>

        <div className="top-0 mx-8 mb-6">
          <div className={`${styles.lineGray}`} />

          <div className="text-center uppercase text-white font-normal text-xl tracking-widest my-[25px]">
            Features
          </div>

          <div className={`${styles.lineGray}`} />
          <div className="text-center uppercase text-white font-normal text-xl tracking-widest my-[25px]">
            Pricing
          </div>
          <div className={`${styles.lineGray}`} />
          <div className="text-center uppercase text-white font-normal text-xl tracking-widest my-[25px]">
            Contact
          </div>
          <div className={`${styles.lineGray}`} />
        </div>

        <div className="w-[308] h-12">
          <button className="block mx-auto border-2 border-white w-[308px] h-12 rounded-sm cursor-pointer text-white text-xl font-medium">
            Login
          </button>
        </div>

        <div className="absolute bottom-9 left-[145px] flex items-center justify-between w-[88px] h-6">
          <img src={icons["icon-facebook"]} alt="icon facebook" />
          <img src={icons["icon-twitter"]} alt="icon twitter" />
        </div>
      </div>
      {/* Features
      Login
      <br /> */}
    </header>
  );
};
