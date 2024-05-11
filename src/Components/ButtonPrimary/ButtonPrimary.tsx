export type typeButton =
  | "typeOne"
  | "typeTwo"
  | "typeThree"
  | "typeFor"
  | "typeFive";
export interface PropButton {
  type: typeButton;
  children: string;
  width?: number;
}

const typesButton = (width?: number) => ({
  typeOne:
    "bg-soft-blue rounded-md w-[114px] h-[48px] text-white font-semibold shadow-md cursor-pointer",
  typeTwo: `bg-soft-blue rounded-md w-[${width}px] h-[48px] text-white text-sm font-medium shadow-md cursor-pointer hover:bg-white hover:text-soft-blue hover:border hover:border-soft-blue`,
  typeThree: `bg-[#F7F7F7] rounded-md w-[${width}px] h-[48px] text-very-dark-blue text-sm font-medium shadow-md cursor-pointer`,
  typeFor:
    "bg-soft-blue rounded-md w-[232px] h-[48px] text-white text-sm font-medium shadow-md cursor-pointer",
  typeFive:
    "bg-soft-red rounded-md w-[300px] h-[48px] text-white text-sm font-medium shadow-md hover:bg-white cursor-pointer",
});

export const ButtonPrimary = ({ type, children, width }: PropButton) => {
  return <button className={`${typesButton(width)[type]}`}>{children}</button>;
};
