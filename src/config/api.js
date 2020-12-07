const API_CONST = {
  // 登录
  bindMobile: { url: `/wx-api/wx/auth/bindMobile`, method: 'POST' },
  postCaptcha: { url: `/wx-api/wx/auth/captcha`, method: 'POST' }, //获取短信
  loginByWeixin: { url: `/wx-api/wx/auth/login_by_weixin`, method: 'POST' }, //登录
  registerPhoneNumber: {
    url: `/wx-api/wx/auth/wxAuth/bindMobile`,
    method: 'POST'
  }, //绑定手机号码

  // 用户
  getUserInfo: { url: `/wx-api/wx/user/detail`, method: 'GET' },
  updateUserInfo: { url: `/wx-api/wx/user/update`, method: 'POST' },
  getUserOrderCount: { url: `/wx-api/wx/order/count`, method: 'POST' }, // 获取用户订单数量
  // 首页
  getHome: { url: `/wx-api/wx/home/index`, method: 'GET' }, // 微商城首页
  getHomeTopic: { url: `/wx-api/wx/home/topic_index`, method: 'GET' }, // 微商城首页

  // 分类
  getCatalog: { url: `/wx-api/wx/catalog/all`, method: 'GET' },
  // 商品
  getGoodsList: { url: `/wx-api/wx/goods/list`, method: 'GET' },
  getGoodsDetail: { url: `/wx-api/wx/goods/detail`, method: 'GET' },
  getGoodsComments: { url: `/wx-api/wx/goods/comments`, method: 'GET' },
  postGoodsCommentsLike: {
    url: `/wx-api/wx/goods/comments/like`,
    method: 'POST'
  },

  // 商铺
  getShopList: { url: `/wx-api/wx/shop/list`, method: 'GET' },
  getShopStatus: { url: `/wx-api/wx/shop/field/mapping`, method: 'GET' },
  addShopFavorite: { url: `/wx-api/wx/shop/favorite/add`, method: 'GET' },
  removeShopFavorite: { url: `/wx-api/wx/shop/favorite/remove`, method: 'GET' },
  // 购物车
  addCart: { url: `/wx-api/wx/cart/add`, method: 'POST' },
  addFast: { url: `/wx-api/wx/cart/fastAdd`, method: 'POST' },
  getCartList: { url: `/wx-api/wx/cart/list`, method: 'GET' },
  updateCart: { url: `/wx-api/wx/cart/update`, method: 'POST' },
  batchUpdateCartCheck: { url: `/wx-api/wx/cart/checkAll`, method: 'POST' },
  delCart: { url: `/wx-api/wx/cart/remove`, method: 'POST' },
  // checkoutCart: { url: `/wx-api/wx/cart/checkout`, method: "POST" }, // ！原有checkout
  checkoutCart: { url: `/wx-api/wx/cart/check`, method: 'POST' }, // ！原有checkout
  batchAddCart: { url: `/wx-api/wx/cart/batchAdd`, method: 'POST' }, // 再次购买
  getCartCount: { url: `/wx-api/wx/cart/count`, method: 'GET' }, //获取购物车数量

  // 订单
  submitOrder: { url: `/wx-api/wx/order/submit`, method: 'POST' },
  postOrderDetail: { url: `/wx-api/wx/order/detail`, method: 'POST' },
  getOrderList: { url: `/wx-api/wx/order/list`, method: 'GET' },

  getOrderListNew: { url: `/wx-api/wx/order/list/new`, method: 'GET' },
  postOrderCancelNew: { url: `/wx-api/wx/order/cancel/list`, method: 'POST' },

  postOrderPay: { url: `/wx-api/wx/order/prepay`, method: 'POST' },
  postOrderCancel: { url: `/wx-api/wx/order/cancel`, method: 'POST' }, // 取消订单
  postOrderConfirm: { url: `/wx-api/wx/order/confirm`, method: 'POST' }, // 确认收货
  postOrderDelete: { url: `/wx-api/wx/order/delete`, method: 'POST' }, // 删除订单
  postOrderComment: { url: `/wx-api/wx/order/comment`, method: 'POST' }, //订单评论
  getExpressInfo: { url: `/wx-api/wx/order/express`, method: 'POST' }, // 查看物流
  getDadaExpressInfo: { url: `/wx-api/wx/order/express/dada`, method: 'POST' }, // 查看达达物流

  getTimeUnits: {
    url: `/wx-api/wx/order/dada/availableTimeUnits`,
    method: 'GET'
  }, // 获取线下配送时间颗粒度

  // 售后/退款
  // postAsRefund: { url: `/wx-api/wx/order/refund`, method: "POST" },
  postAsRefund: { url: `/wx-api/wx/order/new/refund`, method: 'POST' },

  getAsDetail: { url: `/wx-api/wx/order/refund/detail`, method: 'GET' },
  postRefundExpress: { url: `/wx-api/wx/order/refund/express`, method: 'POST' },
  getAsList: { url: `/wx-api/wx/order/refund/list`, method: 'GET' },
  postExpressCompany: {
    url: `/wx-api/wx/order/express/company`,
    method: 'POST'
  },
  getAsExpressInfo: {
    url: `/wx-api/wx/order/refund/expressInfo`,
    method: 'GET'
  },

  refundDelete: { url: `/wx-api/wx/order/refund/del`, method: 'GET' }, // 删除
  refundCancel: { url: `/wx-api/wx/order/refund/cancel`, method: 'GET' }, // 撤销

  // 地址管理
  delAddress: { url: `/wx-api/wx/address/delete`, method: 'GET' },
  getAddressDetail: { url: `/wx-api/wx/address/detail`, method: 'GET' },
  getMapAddress: { url: `/wx-api//wx/address/poi`, method: 'GET' },
  getAddressList: { url: `/wx-api/wx/address/list`, method: 'GET' },
  saveAddress: { url: `/wx-api/wx/address/save`, method: 'POST' },
  saveAddressNew: { url: `/wx-api/wx/address/save/new`, method: 'POST' },

  // 发票管理
  delInvoice: { url: `/wx-api/wx/user/invoice/delete`, method: 'GET' },
  getInvoiceDetail: { url: `/wx-api/wx/user/invoice/detail`, method: 'GET' },
  getInvoiceList: { url: `/wx-api/wx/user/invoice/list`, method: 'GET' },
  saveInvoice: { url: `/wx-api/wx/user/invoice/save`, method: 'POST' },

  // 优惠券
  getTicketDetail: {
    url: `/wx-api/wx/ticket/get_ticket_module_plan_scope`,
    method: 'POST'
  }, // 获取优惠券详情
  postTicket: { url: `/wx-api/wx/ticket/get_user_ticket`, method: 'POST' }, // 领取优惠券
  getTicketList: {
    url: `/wx-api/wx/ticket/ticket_detail_list`,
    method: 'POST'
  }, // 获取优惠券列表
  getUserTickeList: {
    url: `/wx-api/wx/ticket/get_user_ticket_detail_list`,
    method: 'POST'
  }, //我的卷包
  getShopTicketList: {
    url: `/wx-api/wx/ticket/get_shop_can_use_ticket`,
    method: 'POST'
  }, // 获取优惠券列表
  getTicketPlanList: {
    url: `/wx-api/wx/ticket/get_ticket_plan_list`,
    method: 'POST'
  }, // 获取投放计划列表

  // 秒杀活动
  getSpikeGoodsList: { url: `/wx-api/wx/seckill/goods/list`, method: 'GET' },
  getSpikeInfos: { url: `/wx-api/wx/seckill/infos`, method: 'GET' },

  // 对件多折
  getActiveGoodsList: { url: `/wx-api/wx/active/goods/list`, method: 'GET' },
  getActiveInfos: { url: `/wx-api/wx/active/discount/list`, method: 'GET' },
  getPayRecommendGoodsList: {
    url: `/wx-api/wx/recommend/goods/list`,
    method: 'GET'
  },

  // 获取省市信息
  getRegion: { url: `/wx-api/wx/region/next`, method: 'GET' },

  // 支付
  pay: { url: `/wx-api/wx/order/prepay`, method: 'POST' },

  // 意见反馈
  postFeedback: { url: `/wx-api/wx/feedback/submit`, method: 'POST' },
  getFeedbackList: { url: `/wx-api/wx/feedback/list`, method: 'GET' },

  // 文件上传
  uploadFile: { url: `/wx-api/wx/storage/upload`, method: 'POST' },

  liveList: { url: `/wx-api/wx/wechat/zhibo_list`, method: 'GET' },

  // 专题相关
  getTopicList: { url: `/wx-api/wx/topic/list`, method: 'GET' },
  getTopicDetail: { url: `/wx-api/wx/topic/detail`, method: 'GET' },

  // QrCode
  getGoodsQrCode: {
    url: `/wx-api/wx/wechat/getwxacodeunlimit`,
    method: 'POST'
  },

  // trends word
  getTrendsWord: { url: `/wx-api/wx/trending/words`, method: 'GET' },

  // Integral
  checkIntegral: {
    url: `/wx-api/wx/integral/countIntegralDeducMoney`,
    method: 'POST'
  },
  getIntegralInfo: { url: `/wx-api/wx/integral/getIntegralInfo`, method: 'GET' }
}
module.exports = API_CONST
