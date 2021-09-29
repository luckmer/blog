import { DisplayErrorData } from "./firmware";

describe("DisplayErrorData", () => {
  test("incorrect header length", () => {
    const header = "";
    const description = "minimum length === 10";
    const category = "minimum length === 10";

    const testPostContent = DisplayErrorData(header, description, category);

    expect(testPostContent).toEqual({
      category: "",
      description: "",
      header: "header is too short",
    });
  });

  test("incorrect  description length", () => {
    const header = "minimum length === 10";
    const description = "";
    const category = "minimum length === 10";

    const testPostContent = DisplayErrorData(header, description, category);

    expect(testPostContent).toEqual({
      category: "",
      description: "description is too short",
      header: "",
    });
  });

  test("incorrect  category length", () => {
    const header = "minimum length === 10";
    const description = "category is too short";
    const category = "";

    const testPostContent = DisplayErrorData(header, description, category);

    expect(testPostContent).toEqual({
      category: "category is too short",
      description: "",
      header: "",
    });
  });

  test("correct length", () => {
    const header = "minimum length === 10";
    const description = "category is too short";
    const category = "minimum length === 10";

    const testPostContent = DisplayErrorData(header, description, category);

    expect(testPostContent).toEqual({
      category: "",
      description: "",
      header: "",
    });
  });
});
