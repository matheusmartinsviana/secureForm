import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const getCsrfToken = async (): Promise<string> => {
  const response = await axios.get<{ csrfToken: string }>("/csrf-token");
  return response.data.csrfToken;
};

export const csrfFetch = async (
  url: string,
  options: { method: string; data?: unknown }
) => {
  const csrfToken = await getCsrfToken();
  const headers = {
    "CSRF-Token": csrfToken,
    "Content-Type": "application/json",
  };

  return axios(url, {
    ...options,
    headers,
  });
};

export const csrfFetchWithoutToken = async (
  url: string,
  options: { method: string; data?: unknown }
) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return axios(url, {
    ...options,
    headers,
  });
};
