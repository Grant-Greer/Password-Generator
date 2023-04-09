export default function generatePassword(
  length: number,
  includeUpper: boolean,
  includeLower: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+[]{};:',.<>?/|`~";
  let charSets = "";

  if (includeUpper) charSets += upperChars;
  if (includeLower) charSets += lowerChars;
  if (includeNumbers) charSets += numberChars;
  if (includeSymbols) charSets += symbolChars;

  if (charSets.length === 0) {
    throw new Error(
      "At least one character set (uppercase, lowercase, numbers, symbols) must be included."
    );
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSets.length);
    password += charSets.charAt(randomIndex);
  }

  return password;
}
