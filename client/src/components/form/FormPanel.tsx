import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import * as register from "../../css/Register.css";
import { FillInterface } from "../Types/FillInterface";

export const FormPanel = (
  descriptions: string[],
  registerTypes: string[],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  elRefs: HTMLFormElement[],
  buttonName: string,
  footerDesc: string,
  footerName: string,
  fillForm: FillInterface | undefined,
  jump: number
) => {
  const half = Math.ceil(registerTypes.length / 2);
  const firstHalf = registerTypes.splice(0, half);
  const secondHalf = registerTypes.splice(-half);

  return (
    <Fragment>
      <register.Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <register.PHeader>{descriptions.pop()}</register.PHeader>
          {firstHalf.map((el, i) => {
            const ref: any = elRefs[i];
            return (
              <register.FormContent key={el}>
                <register.FormLabel htmlFor={el}>{el}</register.FormLabel>
                <register.FormInput placeholder={el} ref={ref} />
                {smallInformation(fillForm, ref)}
              </register.FormContent>
            );
          })}
        </div>
        <div>
          <register.PHeader>{descriptions.pop()}</register.PHeader>
          {secondHalf.map((el, i) => {
            const ref: any = elRefs[i + jump];
            return (
              <register.FormContent key={el}>
                <register.FormLabel htmlFor={el}>{el}</register.FormLabel>
                <register.FormInput placeholder={el} ref={ref} />
                {smallInformation(fillForm, ref)}
              </register.FormContent>
            );
          })}
        </div>
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
};

function smallInformation(fillForm: FillInterface | undefined, ref: any) {
  return (
    <register.Small>
      {fillForm !== undefined &&
      fillForm.status === false &&
      ref?.current &&
      ref.current.value === ""
        ? "required!"
        : ""}
    </register.Small>
  );
}
