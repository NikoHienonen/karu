import { releases } from "data/karuReleases";
import { ReleasePage } from "./ReleasePage";

export const Heads = () => {
  const data = releases.find(({ name }) => name === "Heads of the Hydra");
  if (!data) {
    return null;
  }
  return (
    <ReleasePage data={data}>
      <p>
        'The Heads of the Hydra' is the last single from the concept album
        'Hydra'. The song marks the ending in the story of 'Hydra' as the
        listener follows Darius up to the mountain base of 'The Heads of the
        Hydra', a secret organization who are behind the constant warfare.
      </p>
      <p>
        Niko Hienonen on 'The Heads of the Hydra':{" "}
        <i>
          "As the final song of the album, 'Heads' is a monument of a track with
          three distinct parts that convey the climb to the mountain base, the
          confrontation inside and the closing moments of the story. I'm very
          happy about how the song itself turned out, the breakdown is
          absolutely crushing live."
        </i>
      </p>
    </ReleasePage>
  );
};
