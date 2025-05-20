import { AppContext } from "./useContext";
import { useContext } from "react";
export const useAppContext = () => {
  const appContext = useContext(AppContext);

  return {...appContext}
}
