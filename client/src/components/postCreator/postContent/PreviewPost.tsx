import { PreviewState } from "../../Types/Types";
import { ShortText } from "./ShortText";
import { useMemo } from "react";

import Calendar from "../../Calendar";
import * as Small from "../../../css/PostCreator.css";

const PreviewPost = ({ imgPreview, header, description }: PreviewState) => {
  const shortHeader = useMemo(
    () => <ShortText description={header} />,
    [header]
  );

  const shortDescription = useMemo(
    () => <ShortText description={description} />,
    [description]
  );

  return (
    <Small.PreviewPanel>
      <Calendar />

      <Small.IMGPreview>
        {typeof imgPreview === "object" ? (
          <img src={URL.createObjectURL(imgPreview)} alt="" />
        ) : (
          " "
        )}
        <div>
          <div>
            {header ? <Small.P Type="header">{shortHeader}</Small.P> : ""}
            {description ? (
              <Small.P Type="description">{shortDescription}</Small.P>
            ) : (
              ""
            )}
          </div>
        </div>
      </Small.IMGPreview>
    </Small.PreviewPanel>
  );
};

export default PreviewPost;
