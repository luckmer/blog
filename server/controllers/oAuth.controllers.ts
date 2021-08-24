import userAuth from "../models/userAuth.mongo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

const max = 3 * 24 * 60 * 60;
const SALT = 12;
const SECRET = 211534129078435750;

const oAuthRegister = (req, res, next) => {};

const oAuthLogin = (req, res, next) => {};

const oAuthChangePassword = (req, res, next) => {};

const oAuthDeleteAccount = (req, res, next) => {};

export { oAuthRegister, oAuthLogin, oAuthChangePassword, oAuthDeleteAccount };
