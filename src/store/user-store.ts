import { IUser } from "@/@types/user";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Cookies from "js-cookie";
import { AUTH_REFRESH_TOKEN } from "@/constants/cookieKeys";
import { isTokenExpired } from "@/services/interceptors";
import { instance } from "@/services/api-client";
import { NotificationService } from "@/helpers/notofocations";

interface IUserStore {
  user: IUser;
  isLoading: boolean;
  isAuthorized: boolean;
  getUser: () => void;
}

const useUserStore = create(
  devtools<IUserStore>((set) => ({
    user: {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      google_id: "",
      role: "",
      purchase_limit: 0,
      created_at: "",
      updated_at: "",
    },
    isLoading: false,
    isAuthorized: false,
    getUser: async () => {
      try {
        set({ isLoading: true });

        const refreshToken = Cookies.get(AUTH_REFRESH_TOKEN);

        if (!refreshToken || isTokenExpired(refreshToken)) {
          set({ isAuthorized: false, isLoading: false });
          return null;
        }

        const { data } = await instance.get<IUser>("/user/getUser");

        set({
          user: data,
          isAuthorized: true,
          isLoading: false,
        });
      } catch (error: any) {
        set({ isAuthorized: false, isLoading: false });
        const errorText = error?.response?.data?.message;

        NotificationService.error(errorText);
      }
    },
  }))
);

export default useUserStore;
