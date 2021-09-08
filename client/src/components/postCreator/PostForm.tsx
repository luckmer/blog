import * as Small from "../../css/PostCreator.css";
import { SmallDesc } from "./ShortText";
import { InputChange, ErrorObj } from "../Constants/Types";
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
      type="text"
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
      style={{ display: "none" }}
      onChange={ImagePreview}
    />
    <Small.Small>{imgError}</Small.Small>
    <Small.Span htmlFor="description">Description</Small.Span>
    <Small.TextArea
      id="description"
      placeholder="description"
      name="description"
      onChange={handleChange}
      maxLength={2000}
      value={TextPreview["description"]}
    />
    {SmallDesc(description, Errors, "description")}
    <Small.Span htmlFor="category">Type Category</Small.Span>
    <Small.Input
      id="category"
      placeholder="category"
      name="category"
      onChange={handleChange}
      maxLength={50}
      value={TextPreview["category"]}
    />
    {SmallDesc(category, Errors, "category")}
    <Small.FormStatus>
      <Small.FormButton onClick={handleCancel}>Cancel</Small.FormButton>
      <Small.FormButton type="submit">&#xd7; Confirm </Small.FormButton>
    </Small.FormStatus>
  </Small.Form>
);

export default PostForm;
