import { H2, P } from "./../../Components";
export interface PropData {
  title: string;
  description: string;
}

export const Slice = ({ title, description }: PropData) => {
  return (
    <>
      <H2>{title}</H2>
      <P>{description}</P>
      {/* <img src="" alt="Some Image" /> */}
    </>
  );
};
