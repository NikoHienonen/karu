import { Link } from "react-router-dom";

interface LinkComponentProps {
  name: string;
}

const LinkComponent = ({ name }: LinkComponentProps) => (
  <li className="cursor-pointer text-2xl font-light text-white hover:text-yellow-400 transition-colors">
    <Link to={name === "home" ? "/" : name}>{name}</Link>
  </li>
);

export const NavigationLinks = () => {
  const links = ["home", "music", "about", "contact"];
  return (
    <ul className="flex flex-col justify-center items-center uppercase tracking-widest gap-5">
      {links.map((link) => (
        <LinkComponent name={link} />
      ))}
    </ul>
  );
};
