import { useState } from "react"
import { GetApi } from "./GetApi"


export function  useApiBooks ( )  {
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

 

  return {books, error, loading , getData, setBooks}
}