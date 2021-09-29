import { chunkString } from "../";

describe("cut text", () => {
  test("should cut text", () => {
    const text = "split";
    const size = 2;

    const cutResult = chunkString(text, size);
    const result = ["sp", "li", "t"];

    expect(cutResult).toEqual(result);
  });

  test("should split only text", () => {
    const text = "12";
    const size = 1;

    const cutResult = chunkString(text, size);
    const result = ["1", "2"];

    expect(cutResult).toEqual(result);
  });
});
