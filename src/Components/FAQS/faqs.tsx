import { FAQSAccordeon, H2, P } from "./../../Components";

export const Faqs = () => {
  return (
    <div className="mx-5">
      <H2>Frequently Asked Questions</H2>
      <P>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </P>

      <FAQSAccordeon />
    </div>
  );
};
