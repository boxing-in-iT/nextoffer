import { ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "@/constants/cookieKeys";
import { UNAUTHORIZED_STATUS_CODE_401 } from "@/constants/httpStatuses";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

//  not secure, client-side use only
export const isTokenExpired = (token?: string) => {
  if (!token) return true;
  return false; // временно
};

export const addAccessToken = (config: InternalAxiosRequestConfig) => {
  const access = Cookies.get(ACCESS_TOKEN) ?? "";
  const refresh = Cookies.get(AUTH_REFRESH_TOKEN) ?? "";

  if (access && !isTokenExpired(refresh)) {
    config.headers.Authorization = access;
  }

  return config;
};

let accessTokenPromise: Promise<string | null> | null = null;

export const updateAccessToken = async (error: AxiosError) => {
  if (error.response?.status !== UNAUTHORIZED_STATUS_CODE_401) {
    return Promise.reject(error);
  }

  if (!error.config) return Promise.reject(error); // ✅ Проверяем, что config не undefined

  if (!accessTokenPromise) {
    accessTokenPromise = fetchAccessToken().then((token) => {
      accessTokenPromise = null;
      return token;
    });
  }

  const token = await accessTokenPromise;
  if (!token) return Promise.reject(error);

  Cookies.set(ACCESS_TOKEN, token);

  const config = addAccessToken(error.config);
  return axios(config);
};

const fetchAccessToken = async (): Promise<string> => {
  const refresh = Cookies.get(AUTH_REFRESH_TOKEN) ?? "";
  if (!refresh || isTokenExpired(refresh)) return "";

  try {
    const { data } = await axios.post<{ access: string }>(
      "/token/refresh/",
      { refresh },
      { baseURL: "https://app-api.205medical.com/" }
    );
    return data.access;
  } catch (error) {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(AUTH_REFRESH_TOKEN);
    return "";
  }
};
