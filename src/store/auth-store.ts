import { instance } from "@/services/api-client";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "@/constants/cookieKeys";
import { NotificationService } from "@/helpers/notofocations";
import { IAuthTokens } from "@/@types/auth";

interface LoginhParams {
  email: string;
  password: string;
}

interface RecoverPasswordParams {
  email: string;
}

interface ChangePasswordParams {
  new_password: string;
  confirm_password: string;
}

interface IAuthStore {
  isLoading: boolean;
  login: (values: LoginhParams, onSuccess: () => void) => void;
  logout: () => void;
}

const useAuthStore = create(
  devtools<IAuthStore>((set) => ({
    isLoading: false,
    login: async (values, onSuccess) => {
      set({ isLoading: true });

      try {
        const { data } = await instance.post<IAuthTokens>(
          "user/login/",
          values
        );

        Cookies.set(ACCESS_TOKEN, data.access_token);
        Cookies.set(AUTH_REFRESH_TOKEN, data.refresh_token);

        set({ isLoading: false });

        onSuccess();
        NotificationService.success();
      } catch ({ response }: any) {
        const errorText = response?.data?.message;

        set({ isLoading: false });

        NotificationService.error(errorText);
      }
    },
    logout: () => {
      Cookies.remove(ACCESS_TOKEN);
      Cookies.remove(AUTH_REFRESH_TOKEN);
      NotificationService.success();
      //   useUserStore.getState().getUser();
      //   history.replace(PATHNAMES.LOGIN);
    },
  }))
);

export default useAuthStore;
