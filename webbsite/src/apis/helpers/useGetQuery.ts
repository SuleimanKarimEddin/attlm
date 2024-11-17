import { useQuery } from "react-query"
import useAxios from "./useAxios"


function useGetQuery(
    KEY:string,
    url:string,
    params:Record<string, any> = {},
    options:Record<string,any> ={}
) {

  const axios = useAxios()
  return useQuery({
    queryKey:[KEY,params],
    queryFn: async () => {
        const response = await axios.get(url ,{
          params
        }
      )
        return response ?? []
    },
    ...options
  })
  
}

export default useGetQuery