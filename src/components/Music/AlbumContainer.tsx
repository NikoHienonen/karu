import { releases } from "data/karuReleases";
import { ReactNode } from "react";
import { BsSpotify } from "react-icons/bs";

interface AlbumInfoProps {
  title: string;
  subtitle: string;
  link: string;
  releaseDate: string;
}

const AlbumInfo = ({ title, subtitle, link, releaseDate }: AlbumInfoProps) => {
  return (
    <div className="bg-black bg-opacity-50 p-5 pt-10 uppercase text-center tracking-widest flex flex-col gap-5">
      <h2 className="text-5xl">{title}</h2>
      <p className="text-xl">{subtitle}</p>
      <a
        href={link}
        target="_blank"
        className="flex flex-1 items-center justify-center gap-2 border-2 border-white rounded-lg py-2 px-5 hover:border-yellow-400 hover:text-yellow-400 w-fit self-center"
      >
        <BsSpotify />
        <span>Stream</span>
      </a>
      <p>Released: {releaseDate}</p>
    </div>
  );
};

interface Props {
  releaseName: string;
  children: ReactNode;
}

export const AlbumContainer = ({ releaseName, children }: Props) => {
  const release = releases.find((release) => releaseName === release.name);
  if (!release) {
    return null;
  }
  const { img, name, subTitle, links, releaseDate } = release;
  return (
    <div className="text-white">
      <img src={img} />
      <AlbumInfo
        title={name}
        subtitle={subTitle}
        link={links.spotify}
        releaseDate={releaseDate}
      />
      {children}
    </div>
  );
};
