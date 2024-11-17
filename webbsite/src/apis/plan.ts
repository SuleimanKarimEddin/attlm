import useGetQuery from "./helpers/useGetQuery"

const API = {
    GET:'/plans',
    GET_ONE:'/plans/',
    UPDATE:'/plans',
    DELETE:'/plans',
    ADD:'/plans'
}
const KEY= "plan"

export const useGetPlan = (params: Record<any, string> = {}, options: Record<any, string> = {}) => useGetQuery(KEY, API.GET, params, options)
