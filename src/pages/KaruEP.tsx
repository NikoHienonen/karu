import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";

export const KaruEP = () => {
  return (
    <MusicWrapper>
      <AlbumContainer releaseName="KARU EP">
        <AlbumStoriesContainer>
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
        </AlbumStoriesContainer>
        <IframesContainer
          srcs={[
            "https://open.spotify.com/embed/album/7hy1oBxABVJ7frFxdSyFqK?utm_source=generator",
            "https://embed.music.apple.com/us/album/karu-ep/1540499832",
          ]}
        />
      </AlbumContainer>
    </MusicWrapper>
  );
};
