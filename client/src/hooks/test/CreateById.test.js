import group from "../CreateById";

describe("group", () => {
  test("should split text by id", () => {
    const data = [
      { id: 1, text: "dasads" },
      { id: 2, text: "dasads" },
      { id: 3, text: "dasads" },
      { id: 2, text: "dasads" },
      { id: 3, text: "dasads" },
    ];
    const key = "id";
    const splitResult = group(data, key);
    const result = [
      [{ id: 1, text: "dasads" }],
      [
        { id: 2, text: "dasads" },
        { id: 2, text: "dasads" },
      ],
      [
        { id: 3, text: "dasads" },
        { id: 3, text: "dasads" },
      ],
    ];

    expect(splitResult).toEqual(result);
  });

  test("should split by any key", () => {
    const data = [
      { id: 1, text: "dasads" },
      { id: 2, text: "dasads" },
      { id: 3, text: "dasads" },
      { id: 2, text: "dasads" },
      { id: 3, text: "dasads" },
    ];
    const key = "text";
    const splitResult = group(data, key);
    const result = [
      [
        { id: 1, text: "dasads" },
        { id: 2, text: "dasads" },
        { id: 3, text: "dasads" },
        { id: 2, text: "dasads" },
        { id: 3, text: "dasads" },
      ],
    ];

    expect(splitResult).toEqual(result);
  });
});
