import React, { createContext} from "react";

import { useState } from "react";
import { GetApi } from "./GetApi";

export const AppContext = createContext({} as any)

export const AppProvider : React.FC<{children: React.ReactNode}> = ({children}) => {
  const [books, setBooks] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  
 

   const getData = async (url : string) => {
    try {
      setLoading(true)
      const response = await GetApi(url) 
      
      setBooks(response)
      setLoading(false)
  
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  
    }
   const VALUES = {
    books,setBooks,error,setError,loading,setLoading,
    getData
  }

  return (
    <AppContext.Provider value={VALUES}>
      {children}
    </AppContext.Provider>
  )
}