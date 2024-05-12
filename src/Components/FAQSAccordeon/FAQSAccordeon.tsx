import { useState } from "react";
import { ButtonPrimary } from "./../../Components";

export interface Props {
  title: string;
  description: string;
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IconArrowUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
      <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
    </svg>
  );
};

export const IconArrowDown = () => {
  return (
    <svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 11L10 3L18 11" stroke="#FA5959" strokeWidth="3" />
    </svg>
  );
};

export const AccordeonItem = ({ title, description, open, set }: Props) => {
  return (
    <div className="mb-5">
      <div onClick={() => set(!open)} className="flex justify-between mb-2">
        <h3>{title}</h3>
        <div className="mt-1 ">
          {open ? <IconArrowDown /> : <IconArrowUp />}
        </div>
      </div>
      <p
        className={`${
          open ? "" : "hidden"
        } text-[15px] text-grayish-blue mb-4 hover:text-soft-red`}
      >
        {description}
      </p>
      <hr />
    </div>
  );
};

export const FAQSAccordeon = () => {
  const [openQuestionOne, setOpenQuestionOne] = useState(false);
  const [openQuestionTwo, setOpenQuestionTwo] = useState(false);
  const [openQuestionThree, setOpenQuestionThree] = useState(false);
  const [openQuestionFor, setOpenQuestionFor] = useState(false);

  const stateOsQuestion = [
    {
      open: openQuestionOne,
      set: setOpenQuestionOne,
    },
    {
      open: openQuestionTwo,
      set: setOpenQuestionTwo,
    },
    {
      open: openQuestionThree,
      set: setOpenQuestionThree,
    },
    {
      open: openQuestionFor,
      set: setOpenQuestionFor,
    },
  ];

  return (
    <>
      {/* Container Accordeon */}
      <div className="mx-5">
        <div className="md:mb-14">
          {ITEMS_FAQS.map((item, index) => (
            <AccordeonItem
              key={index}
              title={item.title}
              description={item.description}
              open={stateOsQuestion[index].open}
              set={stateOsQuestion[index].set}
            />
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-center mb-32">
          <ButtonPrimary type="typeOne" children="More Info" />
        </div>
      </div>
    </>
  );
};

const ITEMS_FAQS = [
  {
    title: "What is Bookmark?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis",
  },
  {
    title: "How can I request a new browser?",
    description:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    description:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    description:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
