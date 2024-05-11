export interface Props {
  children: string;
  styles?: string;
}

export const H2 = ({ children, styles }: Props) => {
  return (
    <h2
      className={`text-very-dark-blue text-center text-3xl font-medium mb-4 ${styles}`}
    >
      {children}
    </h2>
  );
};
