import crypto from "crypto-js"

export const encryptByCrypto = (word) => {
  const wordArray = crypto.enc.Utf8.parse(word)
  const base64 = crypto.enc.Base64.stringify(wordArray)
  return base64
}
