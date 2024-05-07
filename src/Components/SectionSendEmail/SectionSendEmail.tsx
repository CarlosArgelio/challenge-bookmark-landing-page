import { ButtonPrimary } from "./../../Components";

export const SectionSendEmail = () => {
  return (
    <div className="bg-soft-blue">
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <input type="email" placeholder="Enter your email address" />

      <ButtonPrimary type="typeOne" children="Contact Us" />
    </div>
  );
};
