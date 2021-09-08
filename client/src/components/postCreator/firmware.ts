import { useState, useCallback } from "react";
import { ErrorObj, InputChange } from "../Constants/Types";
import { sagaActions } from "../../redux/saga/sagaActions";
import { useDispatch } from "react-redux";
import ApiImg from "../../api/ImgApi";

interface TextState {
  [key: string]: string;
}

const Firmware = () => {
  const [imgPreview, setImgPreview] = useState<File | undefined>(undefined);
  const [Errors, setErrors] = useState<ErrorObj>();
  const [imgError, setImgError] = useState<string>("");
  const [TextPreview, setTextPreview] = useState<TextState>({
    header: "",
    description: "",
    category: "",
  });
  const dispatch = useDispatch();
  const types: string[] = ["header", "description", "category"];

  const ImagePreview = useCallback(async (e: InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (!files) return;

    const file = files[0];

    const imgCheck = ApiImg.checkImg(file);

    if (imgCheck) setImgError(imgCheck);
    setTimeout(() => setImgError(""), 5000);

    if (!imgCheck) setImgPreview(file);
  }, []);

  const handleChange = useCallback(
    (e: InputChange) => {
      const { name, value } = e.target;
      setTextPreview({ ...TextPreview, [name]: value });
    },
    [TextPreview]
  );

  const DisplayErrorData = (
    header: string,
    description: string,
    category: string
  ): ErrorObj => {
    let errors: ErrorObj = {};

    errors["header"] = !header.length ? "header is too short" : "";

    errors["description"] = !description.length
      ? "description is too short"
      : "";

    errors["category"] = !category.length ? "category is too short" : "";
    return errors;
  };

  const handleCancel = useCallback(() => {
    types.forEach((el) => (TextPreview[el] = ""));

    setTextPreview(TextPreview);
    setImgPreview(undefined);
  }, [TextPreview, types]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { header, description, category } = TextPreview;
      let errors: ErrorObj = DisplayErrorData(header, description, category);

      if (
        errors["header"] !== "" ||
        errors["description"] !== "" ||
        errors["category"] !== ""
      ) {
        setErrors(errors);
        return;
      }

      if (imgPreview) {
        const result = await ApiImg.Upload(imgPreview);

        const createPost = { image: result.url, ...TextPreview };
        dispatch({ type: sagaActions.CREATE_POST, createPost });
        handleCancel();
      }
    },

    [TextPreview, imgPreview, dispatch, handleCancel]
  );

  const description = TextPreview.description;
  const header = TextPreview.header;
  const category = TextPreview.category;

  return {
    handleSubmit,
    handleChange,
    header,
    Errors,
    ImagePreview,
    description,
    category,
    handleCancel,
    TextPreview,
    imgError,
    imgPreview,
  };
};

export default Firmware;
