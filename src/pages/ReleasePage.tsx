import { AlbumContainer } from "components/Music/AlbumContainer";
import { AlbumStoriesContainer } from "components/Music/AlbumStoriesContainer";
import { IframesContainer } from "components/Music/IframesContainer";
import { MusicWrapper } from "components/Music/MusicWrapper";
import { Release } from "data/karuReleases";
import { ReactNode } from "react";

interface Props {
  data: Release;
  children?: ReactNode;
}

export const ReleasePage = ({ data, children }: Props) => {
  const { name, links } = data;
  const { spotify, appleMusic } = links;
  const embedLinks = [spotify.embed, appleMusic.embed];
  return (
    <MusicWrapper>
      <AlbumContainer releaseName={name}>
        <AlbumStoriesContainer>{children}</AlbumStoriesContainer>
        <IframesContainer srcs={embedLinks} />
      </AlbumContainer>
    </MusicWrapper>
  );
};
