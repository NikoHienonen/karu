import { MusicWrapper } from "components/MusicWrapper";
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
      <img className="w-full md:w-4/5 lg:h-96" src={image} />
      {showText && (
        <>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute cursor-pointer inset-0 flex items-center justify-center uppercase text-white tracking-widest text-xl">
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
      <div className="flex flex-wrap gap-5 justify-center">
        {releases.map(({ name, img }) => (
          <ReleaseComponent name={name} image={img} />
        ))}
      </div>
    </MusicWrapper>
  );
};
