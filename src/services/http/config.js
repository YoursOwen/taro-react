export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

export const STATUS_TEXT = {
  200: '请求成功',
  400: '请求异常',
  404: '请求失效',
  500: '服务器异常',
  502: '服务器异常',
  503: '服务不可用',
  504: '网关超时'
}
