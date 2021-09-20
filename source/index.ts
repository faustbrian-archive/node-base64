export const encode = (content: string): string =>
  Buffer.from(content, "utf8").toString("base64");
export const decode = (content: string): Buffer =>
  Buffer.from(content, "base64");
