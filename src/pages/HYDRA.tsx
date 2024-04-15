import { releases } from "data/karuReleases";
import { ReleasePage } from "./ReleasePage";

export const HYDRA = () => {
  const data = releases.find(({ name }) => name === "HYDRA");
  if (!data) {
    return null;
  }
  return (
    <ReleasePage data={data}>
      <p>
        'HYDRA' is KARU's debut full-length album. It is a concept album,
        meaning that the songs tell an over-arching story over the course of the
        record. Set in a dystopian future, the album tells a story about nations
        constantly at war, with soon-to-be retiring supersoldier and a rebel
        girl who fate teams up to stop a secret organization from plunging the
        world into darkness.
      </p>
      <p>
        Niko Hienonen on 'HYDRA':{" "}
        <i>
          "'HYDRA' is the end result of a long learning process for Kalle
          (Pöyskö) and myself. We had to reinvent our whole workflow from
          composing to mixing and mastering. I'm immensely proud of the album
          and can't wait to play the songs live to you."
        </i>
      </p>
    </ReleasePage>
  );
};
