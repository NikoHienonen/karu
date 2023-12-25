import { AlbumContainer } from "components/Music/AlbumContainer";
import { MusicWrapper } from "components/MusicWrapper";

export const KaruEP = () => {
  return (
    <MusicWrapper className=" text-white">
      <AlbumContainer releaseName="KARU EP">
        <div className="mt-10 bg-black bg-opacity-50 p-5 gap-5 flex flex-col">
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
        </div>
        <iframe
          style={{ borderRadius: "12px", marginTop: 20 }}
          src="https://open.spotify.com/embed/album/7hy1oBxABVJ7frFxdSyFqK?utm_source=generator"
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
          src="https://embed.music.apple.com/us/album/karu-ep/1540499832"
        ></iframe>
      </AlbumContainer>
    </MusicWrapper>
  );
};
