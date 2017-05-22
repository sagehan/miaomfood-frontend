import 'src/assets/sass/order.scss'
import { reviewOrder } from '../api'

function getUrlParameter (name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

(function () {
  let oid = getUrlParameter('out_trade_no')

  reviewOrder(oid).then(
    orderDetails => {
      console.log(orderDetails)
      window.history.pushState('object or string', '喵姆餐厅•订单详情', oid)
    },
    err => console.log('error message:' + err)
    )
})()
