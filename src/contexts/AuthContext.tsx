import { axiosInstance } from "@/lib/api/api";
import { pathKeys } from "@/lib/react-router";
import { InternalAxiosRequestConfig } from "axios";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type TUser = {
  id: string;
  email: string;
  username: string;
  fullname: string;
  profileImage: string;
  bio: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type TContextType = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  logout: () => void;
};

const INITIAL_STATE = {
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
  logout: () => {},
};

const AuthContext = createContext<TContextType>(INITIAL_STATE);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(() =>
    sessionStorage.getItem("token")
  );
  const [user, setUser] = useState<TUser | null>(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    return userInfo ? (JSON.parse(userInfo) as TUser) : null;
  });

  const logout = () => {
    setToken(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userInfo");
  };

  useEffect(() => {
    if (!token) {
      navigate(pathKeys.login());
      setToken("token");
    }
  }, [token, navigate]);

  useLayoutEffect(() => {
    const authInterceptor = axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers.Authorization = token
          ? `Bearer ${token}`
          : config.headers.Authorization;
        return config;
      }
    );
    return () => axiosInstance.interceptors.request.eject(authInterceptor);
  }, [token]);

  const value = {
    token,
    setToken: setToken,
    user,
    setUser,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
