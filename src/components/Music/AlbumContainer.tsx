import { releases } from "data/karuReleases";
import { useGetIsMobile } from "hooks/usegetIsMobile";
import { ReactNode } from "react";
import { AlbumInfo } from "./AlbumInfo";

interface Props {
  releaseName: string;
  children: ReactNode;
}

export const AlbumContainer = ({ releaseName, children }: Props) => {
  const release = releases.find((release) => releaseName === release.name);
  const isMobile = useGetIsMobile();
  if (!release) {
    return null;
  }
  const { img, name, subTitle, links, releaseDate } = release;
  return (
    <div className="w-full flex flex-col justify-center gap-5">
      <div
        className={`text-white flex ${
          isMobile ? "flex-col" : "flex-row-reverse"
        }`}
      >
        <div className="flex w-full md:flex-1">
          <img src={img} className="" />
        </div>
        <AlbumInfo
          title={name}
          subtitle={subTitle}
          link={links.spotify.track}
          releaseDate={releaseDate}
        />
      </div>
      {children}
    </div>
  );
};
