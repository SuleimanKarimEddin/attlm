import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../config/axios'


function useAxios() {
  return (
    axios.create({
        baseURL:BASE_URL ,
        headers:{
            Authorization:'Bearer '+localStorage.getItem('token'),
          }
        
    })
  )
}

export default useAxios


