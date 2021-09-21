import { encoding } from "bcrypto";

export const encode = (content: string): string =>
  encoding.base64.encode(Buffer.from(content));

export const decode = (content: string): Buffer =>
  encoding.base64.decode(content);
