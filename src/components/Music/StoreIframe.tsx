import { useGetIsMobile } from "hooks/usegetIsMobile";

interface Props {
  src: string;
}

export const StoreIframe = ({ src }: Props) => {
  const isMobile = useGetIsMobile();
  const isApple = src.includes("apple");
  return (
    <iframe
      style={{ borderRadius: "12px", marginTop: 20 }}
      height={isApple ? "500" : "380"}
      src={src}
      width={isMobile ? "100%" : "50%"}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    />
  );
};
