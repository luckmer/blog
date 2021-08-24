import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as register from "../../css/Register.css";
import { FillInterface } from "./types/FillInterface";

export const FormPanel = (
  registerTypes: string[],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  elRefs: HTMLFormElement[],
  buttonName: string,
  footerDesc: string,
  footerName: string,
  fillForm: FillInterface | undefined
) => {
  return (
    <Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        {registerTypes.map((el, i) => {
          const ref: any = elRefs[i];
          return (
            <register.FormContent key={el}>
              <register.FormLabel htmlFor={el}>{el}</register.FormLabel>
              <register.FormInput placeholder={el} ref={ref} />
            </register.FormContent>
          );
        })}
        <register.FormSubmit type="submit">{buttonName}</register.FormSubmit>
      </form>
      <register.Footer>
        <p>{footerDesc}</p>
        <Link to={footerName}>
          <span>{footerName}</span>
        </Link>
      </register.Footer>
      <register.Footer>
        {fillForm !== undefined && fillForm.status === false ? (
          <span>{fillForm.result}</span>
        ) : (
          ""
        )}
      </register.Footer>
    </Fragment>
  );
};
