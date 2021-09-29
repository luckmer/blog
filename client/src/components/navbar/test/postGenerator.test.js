import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { PostGenerator } from "../PostGenerator";

const Utility = () => {
  const id = "1";
  const avatar = "";
  const menuControl = () => {};

  return { id, avatar, menuControl };
};

describe("PostGenerator", () => {
  test("should render PostGenerator after correct validation", () => {
    const { id, avatar, menuControl } = Utility();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <PostGenerator id={id} avatar={avatar} menuControl={menuControl} />
      </MemoryRouter>
    );
  });

  test("expect create post button", () => {
    const { id, avatar, menuControl } = Utility();
    const utils = render(
      <MemoryRouter initialEntries={["/"]}>
        <PostGenerator id={id} avatar={avatar} menuControl={menuControl} />
      </MemoryRouter>
    );

    const createPostBtn = utils.getByText("Create Post");

    expect(createPostBtn).toBeInTheDocument();
  });
});
