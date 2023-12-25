import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export const MusicWrapper = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`p-5 pt-48 w-screen flex bg-fixed bg-winter bg-center bg-cover ${className}`}
    >
      {children}
    </div>
  );
};
