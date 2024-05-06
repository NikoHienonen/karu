import { releases } from "data/karuReleases";
import { ReleasePage } from "./ReleasePage";
import { EmpireLyrics } from "assets/lyrics/hydra/EmpireLyrics";

export const Empire = () => {
  const data = releases.find(({ name }) => name === "Empire of Dust");
  if (!data) {
    return null;
  }
  return (
    <ReleasePage data={data} LyricsComponent={<EmpireLyrics />}>
      <div className="flex flex-col gap-5">
        <p>
          'Empire of Dust' is the first single KARU released three years after
          their debut EP. The song sets the tone and emotional setting for the
          whole album and is the perfect summation of KARU's music; epic riffs,
          beautiful orchestra and brutal drums.
        </p>
        <p>
          Niko Hienonen on 'Empire of Dust':{" "}
          <i>
            "'Empire' was the first song we wrote with Kalle (Pöyskö) after the
            debut EP. We sat down one saturday, filled our coffee cups and after
            a few hours, we had the 10 minute demo ready. When writing, we
            usually just add cool, over-the-top stuff until the song seems
            finished to us."
          </i>
        </p>
      </div>
    </ReleasePage>
  );
};
