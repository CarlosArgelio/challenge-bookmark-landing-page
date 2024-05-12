import { svg } from "./../../assets";

export interface PropsHeader {
  openMenu: boolean;
  handleOpenMenu(): void;
  handleCloseMenu(): void;
}

const icons = svg.icons;
const logos = svg.logos;

const styles = {
  lineGray: "h-[1px] bg-[#9194A2] lg:hidden",
  layoutHeader: "mt-10 mb-20",
};

export const Header = ({
  openMenu,
  handleOpenMenu,
  handleCloseMenu,
}: PropsHeader) => {
  return (
    <header
      className={`${styles.layoutHeader} lg:relative px-8 lg:px-40 w-full`}
    >
      <div
        className={`${
          openMenu ? "hidden" : ""
        } flex items-center justify-between h-[25px] lg:h-[45px]`}
      >
        <img src={logos["logo-bookmark"]} alt="logo bookmark" />
        <button onClick={handleOpenMenu} className="lg:hidden">
          <img src={icons["icon-hamburger"]} alt="icon hamburger" />
        </button>
      </div>

      {/* Menu */}
      <nav
        className={`${
          openMenu ? "" : "hidden"
        } absolute s:bg-very-dark-blue left-0 top-0 w-full h-full opacity-80 lg:block lg:bg-transparent`}
      >
        <div className="ml-8 mr-8 mt-10 mb-20 lg:hidden">
          <div className="flex items-center justify-between h-[25px]">
            {/* Logo BookMark */}
            <img
              src={logos["logo-bookmark-bg-white"]}
              alt="logo bookmark bg white"
            />

            {/* Icon X */}
            <button onClick={handleCloseMenu}>
              <img src={icons["icon-x-white"]} alt="icon x white" />
            </button>
          </div>
        </div>

        <ul className="top-0 mx-8 mb-6 lg:mx-0 lg:mb-0 lg:absolute lg:h-10 lg:left-[450px] lg:ml-14 lg:mt-2 lg:flex lg:flex-row lg:gap-3">
          <div className={`${styles.lineGray}`} />
          <li className="text-center uppercase text-white font-normal text-xl lg:text-sm tracking-widest my-[25px] lg:my-0 lg:text-grayish-blue lg:hover:text-soft-red">
            Features
          </li>
          <div className={`${styles.lineGray}`} />
          <li className="text-center uppercase text-white font-normal text-xl lg:text-sm tracking-widest my-[25px] lg:my-0 lg:text-grayish-blue lg:hover:text-soft-red">
            Pricing
          </li>
          <div className={`${styles.lineGray}`} />
          <li className="text-center uppercase text-white font-normal text-xl lg:text-sm tracking-widest my-[25px] lg:my-0 lg:text-grayish-blue lg:hover:text-soft-red">
            Contact
          </li>
          <div className={`${styles.lineGray}`} />
        </ul>
        <div className="w-[308] h-12">
          <button className="block mx-auto border-2 border-white w-[308px] h-12 rounded-sm cursor-pointer text-white text-xl font-medium lg:bg-soft-red lg:rounded-md lg:w-[100px] lg:h-[40px] lg:mt-[2px] lg:text-white lg:text-sm lg:shadow-md lg:hover:bg-white lg:hover:text-soft-red lg:relative lg:left-[350px] lg:border-2 lg:border-soft-red">
            Login
          </button>
        </div>

        <div className="absolute bottom-9 left-[145px] flex items-center justify-between w-[88px] h-6 lg:hidden">
          <img src={icons["icon-facebook"]} alt="icon facebook" />
          <img src={icons["icon-twitter"]} alt="icon twitter" />
        </div>
      </nav>
    </header>
  );
};
