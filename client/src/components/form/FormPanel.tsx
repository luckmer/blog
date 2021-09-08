import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as register from "../../css/Register.css";
import { FillInterface } from "../Types/FillInterface";

export const FormPanel = (
  registerTypes: string[],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  elRefs: HTMLFormElement[],
  buttonName: string,
  footerDesc: string,
  footerName: string,
  fillForm: FillInterface | undefined
) => (
  <Fragment>
    <register.Form onSubmit={(e) => handleSubmit(e)}>
      {registerTypes.map((el, i) => {
        const ref: any = elRefs[i];
        return (
          <register.FormContent key={el}>
            <register.FormLabel htmlFor={el}>{el}</register.FormLabel>
            <register.FormInput placeholder={el} ref={ref} />
            <register.Small>
              {fillForm !== undefined &&
              fillForm.status === false &&
              ref?.current &&
              ref.current.value === ""
                ? "required!"
                : ""}
            </register.Small>
          </register.FormContent>
        );
      })}
      <register.FormSubmit type="submit">{buttonName}</register.FormSubmit>
    </register.Form>
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
