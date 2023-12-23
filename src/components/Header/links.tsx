import { BsSpotify, BsFacebook, BsInstagram, BsApple } from "react-icons/bs";

import { ReactNode } from "react";

export interface SocialMediaLink {
  icon: ReactNode;
  link: string;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    icon: <BsSpotify />,
    link: "https://open.spotify.com/artist/2IKO2323Ur4oGwa1ouZ5Lr?si=A3dfP_TFSaWBiPGEWIj9rA",
  },
  {
    icon: <BsFacebook />,
    link: "https://www.facebook.com/KARUbandofficial/",
  },
  {
    icon: <BsInstagram />,
    link: "https://www.instagram.com/karu_band/",
  },
  {
    icon: <BsApple />,
    link: "https://music.apple.com/us/artist/karu/1540495210",
  },
];

export { socialMediaLinks };
