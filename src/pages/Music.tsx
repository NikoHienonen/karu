import { MusicWrapper } from "components/Music/MusicWrapper";
import { releases } from "data/karuReleases";
import { useState } from "react";
import { Link } from "react-router-dom";
import { escapeString } from "utils/common";

interface ReleaseComponentProps {
  name: string;
  image: string;
}

const ReleaseComponent = ({ name, image }: ReleaseComponentProps) => {
  const [showText, SetShowText] = useState(false);
  const handleHover = () => {
    SetShowText(!showText);
  };
  return (
    <Link
      to={`${escapeString(name)}`}
      className="relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img className="" src={image} />
      {showText && (
        <>
          <div className="absolute inset-0  bg-black opacity-60"></div>
          <div className="absolute cursor-pointer  inset-0 flex items-center justify-center uppercase text-white tracking-widest text-xl">
            {name}
          </div>
        </>
      )}
    </Link>
  );
};

export const Music = () => {
  return (
    <MusicWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 Z-0">
        {releases.map(({ name, img }) => (
          <ReleaseComponent name={name} image={img} />
        ))}
      </div>
    </MusicWrapper>
  );
};
