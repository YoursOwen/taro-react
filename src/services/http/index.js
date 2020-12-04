import baseHttp from "./http"
import apiConfig from '@/config/api'

const webApi = {}

Object.keys(apiConfig).forEach(apiKey => {
  const { url , method } = apiConfig[ apiKey ]
  webApi[ apiKey ] = (data) => {
    return baseHttp[ method.toLowerCase() ](url, data)
  }
})

export default webApi
