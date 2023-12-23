import { SocialMediaLink, socialMediaLinks } from "./links";

const LinkComponent = ({ icon, link }: SocialMediaLink) => {
  return (
    <li className="hover:text-yellow-300 transition-colors" key={link}>
      <a target="_blank" href={link}>
        {icon}
      </a>
    </li>
  );
};

export const SocialMediaLinks = () => {
  return (
    <ul className="flex text-2xl gap-6 ">
      {socialMediaLinks.map((link) => LinkComponent(link))}
    </ul>
  );
};
