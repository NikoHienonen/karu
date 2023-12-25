import { AlbumContainer } from "components/Music/AlbumContainer";
import { MusicWrapper } from "components/MusicWrapper";

export const Heads = () => {
  return (
    <MusicWrapper className=" text-white">
      <AlbumContainer releaseName="Heads of the Hydra">
        <div className="mt-10 bg-black bg-opacity-50 p-5 gap-5 flex flex-col">
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
        </div>
        <iframe
          style={{ borderRadius: "12px", marginTop: 20 }}
          src="https://open.spotify.com/embed/track/17Ntlar0iofw9TyLlQ7W9Y?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          style={{
            marginTop: 50,
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "12px",
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/predator-single/1705377138"
        ></iframe>
      </AlbumContainer>
    </MusicWrapper>
  );
};
