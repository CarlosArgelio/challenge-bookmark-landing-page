export interface Props {
  children: string;
}
export const P = ({ children }: Props) => {
  return (
    <p className="text-grayish-blue text-center text-base font-normal mb-4">
      {children}
    </p>
  );
};
