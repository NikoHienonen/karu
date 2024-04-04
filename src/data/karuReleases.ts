import { images } from "utils/images";

export interface Release {
  name: string;
  type: "single" | "album" | "live";
  subTitle: string;
  releaseDate: string;
  img: string;
  parent?: string;
  links: {
    spotify: string;
    appleMusic: string;
    youtube: string;
  };
  lyricSample: string;
}

export const releases: Release[] = [
  {
    name: "Heads of the Hydra",
    type: "single",
    parent: "Hydra",
    subTitle: "Single from the album 'Hydra'",
    releaseDate: "5.4.2024",
    img: images.hydraCover,
    lyricSample: "They run, try to hide, no one will leave alive...",
    links: {
      spotify: "",
      appleMusic: "",
      youtube: "",
    },
  },
  {
    name: "Predator",
    type: "single",
    parent: "Hydra",
    subTitle: "Single from the album 'Hydra'",
    releaseDate: "15.9.2023",
    img: images.predatorCover,
    lyricSample: "Yearning for the pain to stop",
    links: {
      spotify:
        "https://open.spotify.com/album/0MkebJEJu4iTLtLgj4ygGX?si=Ih7v63idTjym8i304_UfGg",
      appleMusic: "https://music.apple.com/us/album/predator-single/1705377138",
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
      spotify:
        "https://open.spotify.com/album/2nWeHdLHjw9JTyGlhZbXq9?si=gtrIeBAjTlW0n0Q8ulxlSw",
      appleMusic:
        "https://music.apple.com/us/album/empire-of-dust-single/1679321343",
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
      spotify:
        "https://open.spotify.com/album/7hy1oBxABVJ7frFxdSyFqK?si=_0WrGadnT5eR8jo3KbkrTQ",
      appleMusic: "https://music.apple.com/us/album/karu-ep/1540499832",
      youtube: "https://www.youtube.com/@karuofficial5691/videos",
    },
  },
];
