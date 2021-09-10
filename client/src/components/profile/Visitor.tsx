import * as P from "../../css/Profile.css";
import { Fragment } from "react";
import { dataProp } from "../Types/PropsPosts.types";

export const Visitor = ({ firmware }: { firmware: dataProp }) => {
  const { email, avatar, name } = firmware;

  return (
    <Fragment>
      <P.UserData>
        <P.IMG>
          <img src={avatar ? avatar : " "} alt="" />
        </P.IMG>
        <P.VisitorSpacer>
          <P.Small>name</P.Small>
          <P.NextP>{name}</P.NextP>
        </P.VisitorSpacer>
        <P.VisitorSpacer>
          <P.Small>email</P.Small>
          <P.NextP>{email}</P.NextP>
        </P.VisitorSpacer>
      </P.UserData>
    </Fragment>
  );
};
