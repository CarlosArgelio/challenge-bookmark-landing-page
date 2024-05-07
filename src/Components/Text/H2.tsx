export interface Props {
  children: string;
}

export const H2 = ({ children }: Props) => {
  return (
    <h2 className="text-very-dark-blue text-center text-3xl font-medium mb-4">
      {children}
    </h2>
  );
};
