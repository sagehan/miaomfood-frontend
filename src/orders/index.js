import 'src/assets/sass/order.scss'
import Vue from 'vue'
import { reviewOrder } from '../api'

function getUrlParameter (name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

/* eslint-disable no-undef */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

(function () {
  let oid = getUrlParameter('out_trade_no') || window.location.pathname.slice(8)

  reviewOrder(oid).then(
    orderDetails => {
      window.history.pushState('object or string', '喵姆餐厅•订单详情', oid)
      const app = new Vue({
        el: '#order',
        data: { orderRaw: orderDetails },
        computed: {
          orderNumber: function () { return this.orderRaw.orderNumber },
          orderDate: function () { return this.orderRaw.charge.created },
          confirmedTime: function () { return this.orderRaw.confirmedTime },
          deliveredTime: function () { return this.orderRaw.deliveredTime },
          completeTime: function () { return this.orderRaw.completeTime },
          orderedItems: function () { return this.orderRaw.OrderedItems },
          comment: function () { return this.orderRaw.comment },
          customer: function () { return this.orderRaw.customer },
          paymentMethod: function () { return this.orderRaw.charge.paymentMethod },
          scheduleDay: function () { return this.orderRaw['schedule-day'] },
          scheduleTime: function () { return this.orderRaw['schedule-time'] },
          orderStatus: function () { return this.orderRaw.orderStatus },
        },
        template: document.body.querySelector('#order').outerHTML,
      })
    },
    err => console.log('error message:' + err)
    )
})()
