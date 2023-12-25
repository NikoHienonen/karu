import { AlbumContainer } from "components/Music/AlbumContainer";
import { MusicWrapper } from "components/MusicWrapper";

export const Predator = () => {
  return (
    <MusicWrapper className=" text-white">
      <AlbumContainer releaseName="Predator">
        <div className="mt-10 bg-black bg-opacity-50 p-5 gap-5 flex flex-col">
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
