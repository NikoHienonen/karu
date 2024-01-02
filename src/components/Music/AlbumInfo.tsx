import { BsSpotify } from "react-icons/bs";

interface AlbumInfoProps {
  title: string;
  subtitle: string;
  link: string;
  releaseDate: string;
}

export const AlbumInfo = ({
  title,
  subtitle,
  link,
  releaseDate,
}: AlbumInfoProps) => {
  return (
    <div className="bg-black bg-opacity-50 p-5 pt-10 uppercase text-center tracking-widest flex flex-col md:justify-center md:flex-1 gap-5">
      <h2 className="text-5xl">{title}</h2>
      <p className="text-xl">{subtitle}</p>
      <a
        href={link}
        target="_blank"
        className={`flex items-center justify-center gap-2 border-2 border-white rounded-lg py-2 px-5 hover:border-yellow-400 hover:text-yellow-400 w-fit  self-center`}
      >
        <BsSpotify />
        <span>Stream</span>
      </a>
      <p>Released: {releaseDate}</p>
    </div>
  );
};
