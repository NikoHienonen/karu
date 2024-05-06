import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";
import { Release } from "data/karuReleases";
import { ReactNode } from "react";

interface Props {
  data: Release;
  children?: ReactNode;
  LyricsComponent: React.ReactElement;
}

export const ReleasePage = ({ data, children, LyricsComponent }: Props) => {
  const { name, links } = data;
  const { spotify, appleMusic } = links;
  const embedLinks = [spotify.embed, appleMusic.embed];
  return (
    <MusicWrapper>
      <AlbumContainer releaseName={name}>
        <AlbumStoriesContainer>
          <div className="grid lg:grid-cols-twoToOne gap-10">
            {children}
            <div className="min-w-72">
              <h3 className="text-2xl mb-2">Lyrics</h3>
              {LyricsComponent}
            </div>
          </div>
        </AlbumStoriesContainer>
        <IframesContainer srcs={embedLinks} />
      </AlbumContainer>
    </MusicWrapper>
  );
};
