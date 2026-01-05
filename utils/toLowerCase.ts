export function toLittleCase(word: string) {
  return word
    .toLocaleLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
