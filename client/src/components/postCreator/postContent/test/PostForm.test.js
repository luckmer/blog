import { render } from "@testing-library/react";
import PostForm from "../PostForm";

const utility = () => {
  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const header = "";
  const Errors = "";
  const ImagePreview = (e) => {};
  const description = "";
  const category = "";
  const handleCancel = () => {};
  const TextPreview = {
    description: "",
    category: "",
    title: "",
  };
  const imgError = "";

  const post = PostForm(
    handleSubmit,
    handleChange,
    header,
    Errors,
    ImagePreview,
    description,
    category,
    handleCancel,
    TextPreview,
    imgError
  );

  return { post };
};

describe("PostForm", () => {
  test("should render PostForm with no errrors", () => {
    const { post } = utility();
    render(post);
  });

  test("should render the basic fields", () => {
    const { post } = utility();
    const utils = render(post);

    expect(utils.getByRole("header")).toBeInTheDocument();
    expect(utils.getByRole("description")).toBeInTheDocument();
    expect(utils.getByRole("category")).toBeInTheDocument();
  });

  test("should validate form fields", () => {
    const { post } = utility();
    const utils = render(post);
  });
});
