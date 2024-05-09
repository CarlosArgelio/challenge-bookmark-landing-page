import { ButtonPrimary } from "./../../Components";

export const SectionSendEmail = () => {
  return (
    <div className="bg-soft-blue h-[360px]">
      <div className="flex flex-col items-center justify-center mx-5">
        <div className="text-white text-center mt-16">
          <p className="text-sm tracking-widest mb-4">35,000+ already joined</p>
          <h2 className="text-2xl mb-8">
            Stay up-to-date with what we’re doing
          </h2>
        </div>

        <div className="mb-4">
          <input type="email" placeholder="Enter your email address" />
        </div>
        <div className="absolute mt-[350px]">
          <ButtonPrimary type="typeOne" children="Contact Us" />
        </div>
      </div>
    </div>
  );
};
