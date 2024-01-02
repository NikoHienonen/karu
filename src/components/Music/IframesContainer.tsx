import { StoreIframe } from "./StoreIframe";

interface Props {
  srcs: string[];
}

export const IframesContainer = ({ srcs }: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5">
      {srcs.map((src) => (
        <StoreIframe src={src} />
      ))}
    </div>
  );
};
