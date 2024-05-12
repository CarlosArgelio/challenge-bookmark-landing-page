export interface Props {
  children: string;
  styles?: string;
}
export const P = ({ children, styles }: Props) => {
  return (
    <p
      className={`text-grayish-blue text-center text-base font-normal mb-4  lg:text-lg ${styles}`}
    >
      {children}
    </p>
  );
};
