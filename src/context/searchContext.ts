import { createContext, useContext } from "react"
export type GlobalContent = {
  filterText: string
  setFilter:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
filterText: 'Hello World', // set a default value
setFilter: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)