import { AlbumContainer } from "components/Music/AlbumContainer";
import { MusicWrapper } from "components/MusicWrapper";

export const Empire = () => {
  return (
    <MusicWrapper className=" text-white">
      <AlbumContainer releaseName="Empire of Dust">
        <div className="mt-10 bg-black bg-opacity-50 p-5 gap-5 flex flex-col">
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
        </div>
        <iframe
          style={{ borderRadius: "12px", marginTop: 20 }}
          src="https://open.spotify.com/embed/album/2nWeHdLHjw9JTyGlhZbXq9?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          height="450"
          style={{
            width: "100%",
            maxWidth: "660px",
            overflow: "hidden",
            borderRadius: "12px",
            marginTop: 20,
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/empire-of-dust-single/1679321343"
        ></iframe>
      </AlbumContainer>
    </MusicWrapper>
  );
};
