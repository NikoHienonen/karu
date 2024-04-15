import { releases } from "data/karuReleases";
import { ReleasePage } from "./ReleasePage";
import { useState } from "react";
import { EmpireLyrics } from "assets/lyrics/hydra/EmpireLyrics";

export const KaruEP = () => {
  const data = releases.find(({ name }) => name === "KARU EP");
  const [lyricsOpen, setLyricsOpen] = useState<string | undefined>(undefined);
  if (!data) {
    return null;
  }
  const LyricsComponent = () => {
    <div></div>
  }
  return (
    <ReleasePage data={data}>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <p>
            'KARU' is the debut release of the band, originally released in
            2020. Starting as a studio project between Hienonen and Pöyskö, the
            band has evolved much in the six years, since starting in 2017.
            'Desolation', 'Revolution' and 'End of Days' were songs that Pöyskö
            had kept in his hard drive until finally being able to release them
            with KARU.
          </p>
          <p>
            Niko Hienonen on 'KARU EP':{" "}
            <i>
              "We originally had four songs, with one of them not making the cut
              to the EP and I remember sitting with Kalle (Pöyskö) in my
              apartment and going 'we need a crazy metal song for this album'
              and that night, my favourite KARU song 'Nemesis' was born.
              Lyrically 'Nemesis' tells the story of a witch hunter seeking a
              daemon who has possessed someone in a village."
            </i>
          </p>
        </div>
        <div>
          <h3 className="text-xl mb-2">Lyrics</h3>
          
        </div>
      </div>
    </ReleasePage>
  );
};
