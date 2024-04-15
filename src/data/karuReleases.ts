import { images } from "utils/images";

interface SongLink {
  track: string;
  embed: string;
}

interface Song {
  name: string;
  instrumental?: boolean;
}

export interface Release {
  name: string;
  type: "single" | "album" | "live";
  subTitle: string;
  releaseDate: string;
  img: string;
  parent?: string;
  links: {
    spotify: SongLink;
    appleMusic: SongLink;
    youtube: string;
  };
  lyricSample: string;
  songs?: Song[];
}

export const releases: Release[] = [
  {
    name: "HYDRA",
    type: "album",
    subTitle: "Concept album",
    releaseDate: "12.4.2024",
    img: images.hydraCover,
    lyricSample: "They run, try to hide, no one will leave alive...",
    links: {
      spotify: {
        track:
          "https://open.spotify.com/album/3ADVSUEEbI46SsaAgKOO7w?si=WHm8u-6YQbCVm-US7vKJuQ",
        embed:
          "https://open.spotify.com/embed/album/3ADVSUEEbI46SsaAgKOO7w?utm_source=generator",
      },
      appleMusic: {
        track: "https://music.apple.com/us/album/hydra/1734857924",
        embed: "https://embed.music.apple.com/us/album/hydra/1734857924",
      },
      youtube: "https://www.youtube.com/watch?v=I7yfuWAsEyE",
    },
    songs: [
      {
        name: "Atonement",
        instrumental: true,
      },
      {
        name: "Empire of Dust",
      },
      {
        name: "Insurgent",
      },
      {
        name: "Murderclaw",
        instrumental: true,
      },
      {
        name: "Church in the Deep",
      },
      {
        name: "Lowered",
        instrumental: true,
      },
      {
        name: "Predator",
      },
      {
        name: "Heads of the Hydra I: Ascent",
      },
      {
        name: "Heads of the Hydra II: Apex",
      },
      {
        name: "Heads of the Hydra III: Ashes of the Fallen",
      },
    ],
  },

  // {
  //   name: "Heads of the Hydra",
  //   type: "single",
  //   parent: "Hydra",
  //   subTitle: "Single from the album 'Hydra'",
  //   releaseDate: "5.4.2024",
  //   img: images.hydraCover,
  //   lyricSample: "They run, try to hide, no one will leave alive...",
  //   links: {
  //     spotify: {
  //       track:
  //         "https://open.spotify.com/track/0W8uaPHFwfDXgyDyXrCrnY?si=71b765c5945c4655",
  //       embed:
  //         "https://open.spotify.com/embed/track/0W8uaPHFwfDXgyDyXrCrnY?utm_source=generator",
  //     },
  //     appleMusic: {
  //       track:
  //         "https://music.apple.com/us/album/heads-of-the-hydra-ii-apex/1734947348?i=1734947349",
  //       embed:
  //         "https://embed.music.apple.com/us/album/heads-of-the-hydra-ii-apex-single/1734947348",
  //     },
  //     youtube: "https://www.youtube.com/watch?v=I7yfuWAsEyE",
  //   },
  // },
  {
    name: "Predator",
    type: "single",
    parent: "Hydra",
    subTitle: "Single from the album 'Hydra'",
    releaseDate: "15.9.2023",
    img: images.predatorCover,
    lyricSample: "Yearning for the pain to stop",
    links: {
      spotify: {
        track:
          "https://open.spotify.com/album/0MkebJEJu4iTLtLgj4ygGX?si=Ih7v63idTjym8i304_UfGg",
        embed:
          "https://open.spotify.com/embed/track/17Ntlar0iofw9TyLlQ7W9Y?utm_source=generator",
      },
      appleMusic: {
        track: "https://music.apple.com/us/album/predator-single/1705377138",
        embed:
          "https://embed.music.apple.com/us/album/predator-single/1705377138",
      },
      youtube: "https://www.youtube.com/watch?v=VpR9dtM8LzU",
    },
  },
  {
    name: "Empire of Dust",
    type: "single",
    parent: "Hydra",
    subTitle: "Single from the album 'Hydra'",
    releaseDate: "14.4.2023",
    img: images.empireCover,
    lyricSample:
      "Eye for and eye, life for a life / Bygone king smiles in his grave",
    links: {
      spotify: {
        track:
          "https://open.spotify.com/album/2nWeHdLHjw9JTyGlhZbXq9?si=gtrIeBAjTlW0n0Q8ulxlSw",
        embed:
          "https://open.spotify.com/embed/album/2nWeHdLHjw9JTyGlhZbXq9?utm_source=generator",
      },
      appleMusic: {
        track:
          "https://music.apple.com/us/album/empire-of-dust-single/1679321343",
        embed:
          "https://embed.music.apple.com/us/album/empire-of-dust-single/1679321343",
      },
      youtube: "https://www.youtube.com/watch?v=Clqn0oesP7M",
    },
  },
  {
    name: "KARU EP",
    type: "album",
    subTitle: "Studio EP",
    releaseDate: "27.11.2020",
    img: images.karuEP,
    lyricSample: "Stolen from their graves / Now you think you know pain?",
    links: {
      spotify: {
        track:
          "https://open.spotify.com/album/7hy1oBxABVJ7frFxdSyFqK?si=_0WrGadnT5eR8jo3KbkrTQ",
        embed:
          "https://open.spotify.com/embed/album/7hy1oBxABVJ7frFxdSyFqK?utm_source=generator",
      },
      appleMusic: {
        track: "https://music.apple.com/us/album/karu-ep/1540499832",
        embed: "https://embed.music.apple.com/us/album/karu-ep/1540499832",
      },
      youtube: "https://www.youtube.com/@karuofficial5691/videos",
    },
    songs: [
      {
        name: "Desolation",
      },
      {
        name: "Revolution",
      },
      {
        name: "Nemesis",
      },
      {
        name: "End of Days",
      },
    ],
  },
];
