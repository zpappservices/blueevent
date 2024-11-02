
import * as CryptoJS from 'crypto-js';

const secretKey = '123456';

export function encrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, secretKey).toString();
}

export function decrypt(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
