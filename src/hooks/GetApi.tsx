import Axios from 'Axios'



export const  GetApi =  async( url : string) => {
  
  try {
    const response = await Axios.get(url)
    return response.data

  } catch (error) {
    return error
  }


}