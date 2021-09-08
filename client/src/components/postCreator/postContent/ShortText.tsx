import { Fragment, memo } from "react";
import * as Small from "../../../css/PostCreator.css";
import { ShortState, ErrorObj } from "../../Types/Types";

const ShortText = memo(({ description }: ShortState) => {
  const maxWidth = 50;

  return (
    <Fragment>
      {description.length >= maxWidth
        ? description.substring(0, maxWidth - 3) + "..."
        : description}
    </Fragment>
  );
});

const SmallDesc = (
  category: string,
  Errors: ErrorObj | undefined,
  type: string
) => {
  const Err = Errors && Errors[type];
  return (
    <Small.Small Off={category.length >= 50 || Err ? true : false}>
      {Err ? Err : `${category.length}/50 `}
    </Small.Small>
  );
};

export { ShortText, SmallDesc };
