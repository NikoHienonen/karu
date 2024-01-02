import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";

export const Predator = () => {
  return (
    <MusicWrapper>
      <AlbumContainer releaseName="Predator">
        <AlbumStoriesContainer>
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
        </AlbumStoriesContainer>
        <IframesContainer
          srcs={[
            "https://open.spotify.com/embed/track/17Ntlar0iofw9TyLlQ7W9Y?utm_source=generator",
            "https://embed.music.apple.com/us/album/predator-single/1705377138",
          ]}
        />
      </AlbumContainer>
    </MusicWrapper>
  );
};
