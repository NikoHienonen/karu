export function escapeString(string: string) {
  return encodeURIComponent(string.toLowerCase().split(" ").join("-"));
}
