import { useState } from "react";
import { Slice } from "./../../Components";
import { svg } from "./../../assets";

const icons = svg.icons;

const styles = {
  lineGray: "h-[1px] bg-[#9194A2] md:hidden",
};

export const SliceContainer = () => {
  const [viewSimpleBooking, setViewSimpleBooking] = useState<boolean>(true);
  const [viewSpeedySearching, setViewSpeedySearching] =
    useState<boolean>(false);
  const [viewEasySharing, setViewEasySharing] = useState<boolean>(false);

  const handleSimpleBooking = () => {
    setViewSimpleBooking(true);
    setViewSpeedySearching(false);
    setViewEasySharing(false);
  };

  const handleSpeedySearching = () => {
    setViewSimpleBooking(false);
    setViewSpeedySearching(true);
    setViewEasySharing(false);
  };

  const handleEasySharing = () => {
    setViewSimpleBooking(false);
    setViewSpeedySearching(false);
    setViewEasySharing(true);
  };

  return (
    <>
      <div className="mb-8 md:mx-14">
        <div className="mb-10 mx-5">
          <div className={`${viewSimpleBooking ? "" : "hidden"}`}>
            <Slice
              title="Features"
              description="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
            />
          </div>
          <div className={`${viewSpeedySearching ? "" : "hidden"}`}>
            <Slice
              title="Intelligent search"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          </div>
          <div className={`${viewEasySharing ? "" : "hidden"}`}>
            <Slice
              title="Share your bookmarks"
              description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            />
          </div>
        </div>
        <div className="ml-8 mr-8 md:flex md:items-center md:justify-between">
          <div className={`${styles.lineGray}`} />

          <div className="md:flex md:flex-col">
            <button
              onClick={handleSimpleBooking}
              className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center md:w-[150px] md:text-sm md:hover:text-soft-red"
            >
              Simple Bookmarking
            </button>
            <div
              className={`flex justify-center items-center ${
                viewSimpleBooking ? "" : "hidden"
              }`}
            >
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>

          <div className={`${styles.lineGray}`} />

          <div className="md:flex md:flex-col">
            <button
              onClick={handleSpeedySearching}
              className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center md:w-[150px] md:text-sm md:hover:text-soft-red"
            >
              Speedy Searching
            </button>
            <div
              className={`flex justify-center items-center ${
                viewSpeedySearching ? "" : "hidden"
              }`}
            >
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>
          <div className={`${styles.lineGray}`} />

          <div className="md:flex md:flex-col">
            <button
              onClick={handleEasySharing}
              className="w-[302px] mt-4 mb-4 text-base text-very-dark-blue text-opacity-90 text-center md:w-[150px] md:text-sm md:hover:text-soft-red"
            >
              Easy Sharing
            </button>
            <div
              className={`flex justify-center items-center ${
                viewEasySharing ? "" : "hidden"
              }`}
            >
              <img src={icons["icon-rectangle-red"]} alt="" />
            </div>
          </div>

          <div className={`${styles.lineGray}`} />
        </div>
      </div>
    </>
  );
};
