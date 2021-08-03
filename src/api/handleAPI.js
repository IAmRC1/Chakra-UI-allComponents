import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL
const token = localStorage.getItem(process.env.TOKEN_NAME)

export const handleAPI = (
    url, 
    method = 'get', 
    includeToken = false, 
    params = {}, 
    body = {}
  ) => {

  let config = {
    url,
    method,
    baseURL,
  }

  if(includeToken){
    config = {
      ...config,
      headers : {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  if(params){
    config = {
      ...config,
      params
    }
  }

  if(body){
    config = {
      ...config,
      body
    }
  }

  // console.log(`config`, config)

  return axios(config)
}
