import { useWindowSize } from "@uidotdev/usehooks";
import { breakPoints } from "utils/styleUtils";

export function useGetIsMobile() {
  const windwoSize = useWindowSize().width;
  return !!(windwoSize && windwoSize < breakPoints.md);
}
