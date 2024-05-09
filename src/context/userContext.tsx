import {
  createContext,
  useContext,
  useMemo,
  FC,
  ReactNode,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import  useLocalStorage from "../hooks/useLocalStorage";

interface AppContextInterface {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: any) => {
      setUser(data);
    },
    [setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};