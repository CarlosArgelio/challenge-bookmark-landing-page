import { useState } from "react";
import { svg } from "./../../assets";

const icons = svg.icons;

export const SectionSendEmail = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: any }) => {
    const { target } = e;
    setEmail(target.value);
    setEmailInvalid(false);
  };

  const handleInvalid = () => {
    setEmailInvalid(!emailInvalid);
  };

  return (
    <div className="bg-soft-blue h-[440px]">
      <div className="flex flex-col items-center justify-center mx-5">
        <div className="text-white text-center mt-16">
          <p className="text-sm tracking-widest mb-4">35,000+ already joined</p>
          <h2 className="text-2xl mb-8">
            Stay up-to-date with what we’re doing
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            {emailInvalid ? (
              <>
                <div className="relative flex flex-col text-white justify-end right-[3px] bg-soft-red w-[308px] h-[80px] rounded-md px-3 py-2">
                  <p className="text-xs">Whoops, make sure it's an email</p>
                </div>
                <div className="relative flex justify-end right-4 z-20 top-[-3.3rem]">
                  <img src={icons["icon-error"]} alt="" />
                </div>
              </>
            ) : null}
            <input
              className={`${
                emailInvalid
                  ? "relative z-10 top-[-5.2rem]"
                  : "mb-5 top-[-4.2rem]"
              } w-[300px] h-[48px] rounded-md px-3 py-2 bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:bg-slate-50`}
              value={email}
              onChange={handleChange}
              onInvalid={handleInvalid}
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="bg-soft-red rounded-md w-[300px] h-[48px] text-white text-sm font-medium shadow-md"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};
