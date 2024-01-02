import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AlbumStoriesContainer = ({ children }: Props) => {
  return (
    <div className="bg-black bg-opacity-50 p-5 gap-5 flex flex-col">
      {children}
    </div>
  );
};
