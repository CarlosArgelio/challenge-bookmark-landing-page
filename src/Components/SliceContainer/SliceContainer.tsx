import { Slice } from "./../../Components";
import { svg } from "./../../assets";

const icons = svg.icons;

const styles = {
  lineGray: "h-[1px] bg-[#9194A2]",
};

export const SliceContainer = () => {
  return (
    <>
      <div className="mb-8">
        <div className="mb-10 mx-5">
          <div className="hidden">
            <Slice
              title="Intelligent search"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          </div>
          <div className="hidden">
            <Slice
              title="Share your bookmarks"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          </div>
          <div className="">
            <Slice
              title="Features"
              description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
            />
          </div>
        </div>
        <div className="ml-8 mr-8">
          <div className={`${styles.lineGray}`} />

          <div>
            <button className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center">
              Simple Bookmarking
            </button>
            <div className="flex justify-center items-center">
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>

          <div className={`${styles.lineGray}`} />

          <div>
            <button className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center">
              Speedy Searching
            </button>
            <div className="flex justify-center items-center">
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>
          <div className={`${styles.lineGray}`} />

          <div>
            <button className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center">
              Easy Sharing
            </button>
            <div className="flex justify-center items-center">
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>

          <div className={`${styles.lineGray}`} />
        </div>
      </div>
    </>
  );
};
