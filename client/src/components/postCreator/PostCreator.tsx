import { memo, useMemo } from "react";
import * as Small from "../../css/PostCreator.css";
import { PostForm, PreviewPost } from ".";
import Firmware from "./firmware";

const PostCreator = () => {
  const firmware = Firmware();

  const MemorizePreviewPost = useMemo(
    () => (
      <PreviewPost
        imgPreview={firmware.imgPreview}
        header={firmware.header}
        description={firmware.description}
      />
    ),
    [firmware.header, firmware.imgPreview, firmware.description]
  );

  return (
    <Small.Main>
      <header>
        <Small.H1>Create Post</Small.H1>
      </header>
      <Small.Content>
        <Small.Spacer>
          {PostForm(
            firmware.handleSubmit,
            firmware.handleChange,
            firmware.header,
            firmware.Errors,
            firmware.ImagePreview,
            firmware.description,
            firmware.category,
            firmware.handleCancel,
            firmware.TextPreview,
            firmware.imgError
          )}
        </Small.Spacer>
        <Small.Spacer>
          <Small.Span>Preview</Small.Span>
          {MemorizePreviewPost}
        </Small.Spacer>
      </Small.Content>
    </Small.Main>
  );
};

export default memo(PostCreator);
