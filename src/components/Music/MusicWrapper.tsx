import { BackButton } from "components/BackButton";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  className?: string;
  showBackButton?: boolean
}
export const MusicWrapper = ({ children, className = "", showBackButton = false }: Props) => {

  return (
    <div
      className={`text-white p-5 md:p-10 pt-48 md:pt-48 w-screen xl:px-48 flex flex-col bg-fixed bg-winter bg-center bg-cover ${className}`}
    >
      {showBackButton && <BackButton />}
      <div className="mt-10">{children}</div>
    </div>
  );
};
