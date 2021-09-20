import { decode, encode } from "./index";

test("#encode", () => {
  expect(encode("a")).toStrictEqual("YQ==");
});

test("#decode", () => {
  expect(decode("YQ==").toString("utf8")).toStrictEqual("a");
});
