export type typeButton = "typeOne" | "typeTwo" | "typeThree" | "typeFor";
export interface PropButton {
  type: typeButton;
  children: string;
}

const typesButton = {
  typeOne: "bg-soft-blue rounded-md w-[114px] h-[48px] text-white",
  typeTwo: "",
  typeThree: "",
  typeFor: "",
};

export const ButtonPrimary = ({ type, children }: PropButton) => {
  return <button className={`${typesButton[type]}`}>{children}</button>;
};
