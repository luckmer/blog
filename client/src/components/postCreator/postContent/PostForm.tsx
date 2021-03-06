import { InputChange, ErrorObj } from "../../Types/Types";
import { SmallDesc } from "./ShortText";

import * as Small from "../../../css/PostCreator.css";

interface TextState {
  [key: string]: string;
}
const PostForm = (
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
  handleChange: (e: InputChange) => void,
  header: string,
  Errors: ErrorObj | undefined,
  ImagePreview: (e: InputChange) => Promise<void>,
  description: string,
  category: string,
  handleCancel: () => void,
  TextPreview: TextState,
  imgError: string
): JSX.Element => (
  <Small.Form onSubmit={handleSubmit}>
    <Small.Span htmlFor="title">Title</Small.Span>
    <Small.Input
      id="title"
      name="header"
      role="header"
      type="text"
      aria-label="header"
      maxLength={50}
      onChange={handleChange}
      value={TextPreview["title"]}
    />
    {SmallDesc(header, Errors, "header")}
    <Small.Span>Select image</Small.Span>
    <Small.Label htmlFor="file_up">
      <p>Import</p>
    </Small.Label>
    <input
      type="file"
      accept="image/*"
      name="file"
      id="file_up"
      aria-label="file"
      style={{ display: "none" }}
      onChange={ImagePreview}
    />
    <Small.Small>{imgError}</Small.Small>
    <Small.Span htmlFor="description">Description</Small.Span>
    <Small.TextArea
      id="description"
      role="description"
      placeholder="description"
      name="description"
      aria-label="description"
      onChange={handleChange}
      minLength={2000}
      value={TextPreview["description"]}
    />
    {SmallDesc(description, Errors, "description")}
    <Small.Span htmlFor="category">Type Category</Small.Span>
    <Small.Input
      id="category"
      placeholder="category"
      name="category"
      role="category"
      aria-label="category"
      onChange={handleChange}
      maxLength={50}
      value={TextPreview["category"]}
    />
    {SmallDesc(category, Errors, "category")}
    <Small.FormStatus>
      <Small.FormButton onClick={handleCancel}>Cancel</Small.FormButton>
      <Small.FormButton type="submit" aria-label="submit">
        &#xd7; Confirm{" "}
      </Small.FormButton>
    </Small.FormStatus>
  </Small.Form>
);

export default PostForm;
