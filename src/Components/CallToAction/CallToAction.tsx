import { svg } from "./../../assets";

const ilustration = svg.ilustrations;

export const CallToAction = () => {
  return (
    <div>
      <img src={ilustration["illustration-hero"]} alt="illustration hero" />
      <h2>A Simple Bookmark Manager</h2>
      <p>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>

      <button>Get it on Chrome</button>
      <button>Get it on Firefox</button>
    </div>
  );
};
