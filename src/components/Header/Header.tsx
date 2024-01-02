import { useGetIsMobile } from "hooks/usegetIsMobile";
import { NavigationMenu } from "./NavigationMenu";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { images } from "utils/images";
import { Link } from "react-router-dom";

export const Header = () => {
  const isMobile = useGetIsMobile();
  return (
    <header
      className={`absolute z-50 top-0 left-1/2 -translate-x-1/2 self-center text-white flex w-full items-center justify-between p-8 ${
        isMobile ? "flex-row-reverse" : ""
      }`}
    >
      <div className={`flex flex-1 ${isMobile ? "justify-end" : ""}`}>
        <NavigationMenu isMobile={isMobile} />
      </div>
      <Link to="/" className="flex flex-1 justify-center">
        <img src={images.karuLogoWhite} className="h-24" />
      </Link>
      <div className="flex flex-1 justify-end">
        {!isMobile && <SocialMediaLinks />}
      </div>
    </header>
  );
};
