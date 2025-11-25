/**
 * Validates if a string can be encoded in Code 128
 * Code 128 supports ASCII 0–127 (full 128 characters)
 * @param {string} text
 * @returns {{valid: boolean, message: string}}
 */
export function validateCode128(text) {
  if (!text || text.trim() === "") {
    return { valid: false, message: "Input cannot be empty" };
  }

  if (text.length > 80) {
    return { valid: false, message: "Text too long (max 80 chars recommended)" };
  }

  // Code 128 can encode full ASCII 0–127
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code < 0 || code > 127) {
      return { valid: false, message: `Invalid character: "${text[i]}" (ASCII ${code})` };
    }
  }

  return { valid: true, message: "Valid Code 128 input" };
}