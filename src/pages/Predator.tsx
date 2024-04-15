import { ReleasePage } from "./ReleasePage";
import { releases } from "data/karuReleases";
import { PredatorLyrics } from "assets/lyrics/hydra/PredatorLyrics";

export const Predator = () => {
  const data = releases.find(({ name }) => name === "Predator");
  if (!data) {
    return null;
  }
  return (
    <ReleasePage data={data}>
      <div className="flex">
        <div className="flex flex-col gap-5">
          <p>
            The second single from the album 'Hydra', 'Predator' signifies
            Darius' loss of hope and his submission to the violence that is
            required to save Cas. The desperation and helplessness culminate in
            the song's second part.
          </p>
          <p>
            Niko Hienonen on 'Predator':{" "}
            <i>
              "Originally the outro part didn't have any vocals and I was really
              pressed to convey the desperation of Darius with orchestra. Then
              one day the outro vocal line popped into my head and the guys
              immediately told me to include it in the song."
            </i>
          </p>
        </div>
        <div>
          <h3 className="text-xl mb-2">Lyrics</h3>
          <PredatorLyrics />
        </div>
      </div>
    </ReleasePage>
  );
};
