import { useState } from "react"
import { GetApi } from "./getApi"



export function  useApiBooks ( )  {

  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const getData = async (url : string) => {
  try {
    setLoading(true)

    const response = await GetApi(url) 
    
    setData(response)
    setLoading(false)

  } catch (error: any) {
    setError(error.message)
    setLoading(false)
  }finally{
    setLoading(true)
  }

  }


 

  return {data, error, loading , getData}
}