import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";

export const Heads = () => {
  return (
    <MusicWrapper>
      <AlbumContainer releaseName="Heads of the Hydra">
        <AlbumStoriesContainer>
          <p>
            'The Heads of the Hydra' is the last single from the concept album
            'Hydra'. The song marks the ending in the story of 'Hydra' as the
            listener follows Darius up to the mountain base of 'The Heads of the
            Hydra', a secret organization who are behind the constant warfare.
          </p>
          <p>
            Niko Hienonen on 'The Heads of the Hydra':{" "}
            <i>
              "As the final song of the album, 'Heads' is a monument of a track
              with three distinct parts that convey the climb to the mountain
              base, the confrontation inside and the closing moments of the
              story. I'm very happy about how the song itself turned out, the
              breakdown is absolutely crushing live."
            </i>
          </p>
        </AlbumStoriesContainer>
        <IframesContainer
          srcs={[
            "https://open.spotify.com/embed/track/0W8uaPHFwfDXgyDyXrCrnY?utm_source=generator",
            "https://embed.music.apple.com/us/album/heads-of-the-hydra-ii-apex-single/1734947348",
          ]}
        />
      </AlbumContainer>
    </MusicWrapper>
  );
};
