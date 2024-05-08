export type typeButton = "typeOne" | "typeTwo" | "typeThree" | "typeFor";
export interface PropButton {
  type: typeButton;
  children: string;
  width?: number;
}

const typesButton = (width?: number) => ({
  typeOne:
    "bg-soft-blue rounded-md w-[114px] h-[48px] text-white font-semibold shadow-md",
  typeTwo: `bg-soft-blue rounded-md w-[${width}px] h-[48px] text-white text-sm font-medium shadow-md`,
  typeThree: `bg-[#F7F7F7] rounded-md w-[${width}px] h-[48px] text-very-dark-blue text-sm font-medium shadow-md`,
  typeFor: "",
});

export const ButtonPrimary = ({ type, children, width }: PropButton) => {
  return <button className={`${typesButton(width)[type]}`}>{children}</button>;
};