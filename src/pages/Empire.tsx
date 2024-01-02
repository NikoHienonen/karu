import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";

export const Empire = () => {
  return (
    <MusicWrapper>
      <AlbumContainer releaseName="Empire of Dust">
        <AlbumStoriesContainer>
          <p>
            'Empire of Dust' is the first single KARU released three years after
            their debut EP. The song sets the tone and emotional setting for the
            whole album and is the perfect summation of KARU's music; epic
            riffs, beautiful orchestra and brutal drums.
          </p>
          <p>
            Niko Hienonen on 'Empire of Dust':{" "}
            <i>
              "'Empire' was the first song we wrote with Kalle (Pöyskö) after
              the debut EP. We sat down one saturday, filled our coffee cups and
              after a few hours, we had the 10 minute demo ready. When writing,
              we usually just add cool, over-the-top stuff until the song seems
              finished to us."
            </i>
          </p>
        </AlbumStoriesContainer>
        <IframesContainer
          srcs={[
            "https://open.spotify.com/embed/album/2nWeHdLHjw9JTyGlhZbXq9?utm_source=generator",
            "https://embed.music.apple.com/us/album/empire-of-dust-single/1679321343",
          ]}
        />
      </AlbumContainer>
    </MusicWrapper>
  );
};
