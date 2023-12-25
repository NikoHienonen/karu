import { BsCCircle } from "react-icons/bs";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center gap-2 bg-black text-white py-10 tracking-wide">
      <BsCCircle />
      <span>KARU</span>
      <span>{year}</span>
    </footer>
  );
};
