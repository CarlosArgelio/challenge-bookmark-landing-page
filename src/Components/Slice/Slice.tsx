export interface PropData {
  title: string;
  description: string;
}

export const Slice = ({ title, description }: PropData) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src="" alt="Some Image" />
    </>
  );
};
