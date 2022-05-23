import axios from "axios";

export const getRequestHandler = async (
  url: string,
  token: string | null
): Promise<any> => {
  let headers;

  if (token !== null) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await axios.get(url, {
    headers: headers,
  });
  return response.data;
};

export const postRequestHandler = async (
  url: string,
  body: any,
  token: string | null
): Promise<any> => {
  let headers = {};

  if (token !== null) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await axios.post(url, body, {
    headers: {
      ...headers,
    },
  });

  return response.data;
};
