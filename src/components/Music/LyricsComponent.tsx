import { DesolationLyrics } from "assets/lyrics/ep/DesolationLyrics";
import { EODLyrics } from "assets/lyrics/ep/EODLyrics";
import { NemesisLyrics } from "assets/lyrics/ep/NemesisLyrics";
import { RevolutionLyrics } from "assets/lyrics/ep/RevolutionLyrics";
import { ChurchLyrics } from "assets/lyrics/hydra/ChurchLyrics";
import { EmpireLyrics } from "assets/lyrics/hydra/EmpireLyrics";
import { HeadsLyrics } from "assets/lyrics/hydra/HeadsLyrics";
import { InsurgentLyrics } from "assets/lyrics/hydra/InsurgentLyrics";
import { PredatorLyrics } from "assets/lyrics/hydra/PredatorLyrics";
import { Song } from "data/karuReleases";
import { useState } from "react";

interface Props {
  songs: Song[];
}

function getLyricsComponentBySongName(name: string) {
  switch (name) {
    case "Empire of Dust":
      return <EmpireLyrics />;
    case "Insurgent":
      return <InsurgentLyrics />;
    case "Church in the Deep":
      return <ChurchLyrics />;
    case "Predator":
      return <PredatorLyrics />;
    case "Heads of the Hydra II: Apex":
      return <HeadsLyrics />;
    case "Desolation":
      return <DesolationLyrics />;
    case "Revolution":
      return <RevolutionLyrics />;
    case "Nemesis":
      return <NemesisLyrics />;
    case "End of Days":
      return <EODLyrics />;
    default:
      return null;
  }
}

export const LyricsComponent = ({ songs }: Props) => {
  const [selectedSong, setSelectedSong] = useState<string | undefined>(
    undefined
  );
  const handleClick = (songName: string) => {
    const newSelectedSongValue = selectedSong
      ? selectedSong === songName
        ? undefined
        : songName
      : songName;
    setSelectedSong(newSelectedSongValue);
  };
  return (
    <ul className="flex flex-col gap-5">
      {songs.map(({ name, instrumental }) => (
        <li onClick={() => !instrumental && handleClick(name)}>
          <div
            className={`flex align-center gap-2 ${
              !instrumental ? "underline cursor-pointer" : ""
            }`}
          >
            <div className="uppercase text-lg ma tracking-wide font-light">
              {name}
            </div>
            {instrumental && <div>(Instrumetal)</div>}
          </div>
          {selectedSong === name && getLyricsComponentBySongName(name)}
        </li>
      ))}
    </ul>
  );
};
