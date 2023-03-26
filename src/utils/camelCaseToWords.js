export function camelCaseToWords(str) {
  // Replace all capital letters with a space followed by the lowercase version of the same letter
  const words = str.replace(/([A-Z])/g, " $1").toLowerCase();
  // Capitalize the first letter of the first word
  return words.charAt(0).toUpperCase() + words.slice(1);
}
