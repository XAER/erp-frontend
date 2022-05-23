import * as constants from "../config/index";
import { getRequestHandler, postRequestHandler } from "./RequestHandler";

export const PingHandler = async () => {
  return await getRequestHandler(`${constants.API_URL}/ping`, null);
};

export const LoginHandler = async (username: string, password: string) => {
  return await postRequestHandler(
    `${constants.API_URL}/login`,
    { identifier: username, password },
    null
  );
};
