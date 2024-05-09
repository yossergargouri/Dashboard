import {
  createContext,
  useContext,
  useMemo,
  FC,
  ReactNode,
  useCallback,
} from "react";
import  useLocalStorage from "../hooks/useLocalStorage";

interface AppContextInterface {
  filter: any;
  onchangeFilter: (data: any) => void;
}

export const FilterContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface FilterProviderProps {
  children?: ReactNode;
}

export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [filter, setFilter] = useLocalStorage("filter", null);

  const onchangeFilter  = useCallback(
     (data: any) => {
      setFilter(data);
    },
    [setFilter]
  );



  const value = useMemo(
    () => ({
      filter,
      onchangeFilter,
    }),
    [filter, onchangeFilter]
  );
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
  return useContext(FilterContext);
};