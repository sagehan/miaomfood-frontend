import 'src/assets/sass/order.scss'
import Vue from 'vue'
import { reviewOrder } from '../api'

/* eslint-disable no-undef */
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

function getUrlParameter (name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  var results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

function renderDate (timeStamp) {
  let date = new Date(timeStamp * 1000)
  return date.toLocaleDateString('zh-CN')
}

function renderTime (timeStamp) {
  if (timeStamp) {
    let date = new Date(timeStamp * 1000)
    let d = date.toLocaleTimeString('zh-CN', { hour12: false })
    return d.slice(0, -3)
  } else {
    return undefined
  }
}

(function () {
  let oid = getUrlParameter('out_trade_no') || window.location.pathname.slice(8)

  reviewOrder(oid).then(
    orderDetails => {
      window.history.pushState('object or string', '喵姆餐厅•订单详情', oid)
      const app = new Vue({
        el: '#order',
        data: {
          orderRaw: orderDetails,
          activeClass: 'is-active',
        },
        computed: {
          orderNumber: function () { return this.orderRaw.orderNumber },
          orderDate: function () { return renderDate(this.orderRaw.charge.created) },
          orderTime: function () { return renderTime(this.orderRaw.charge.created) },
          confirmedTime: function () { return renderTime(this.orderRaw.confirmedTime) },
          deliveredTime: function () { return renderTime(this.orderRaw.deliveredTime) },
          completeTime: function () { return renderTime(this.orderRaw.completeTime) },
          orderedItems: function () { return this.orderRaw.OrderedItems },
          comment: function () { return this.orderRaw.comment },
          customer: function () { return this.orderRaw.customer },
          orderAmount: function () { return this.orderRaw.amount },
          paymentMethod: function () { return this.orderRaw.charge.paymentMethod },
          scheduleDay: function () { return this.orderRaw['schedule-day'] },
          scheduleTime: function () { return this.orderRaw['schedule-time'] },
          orderStatus: function () { return this.orderRaw.orderStatus },
        },
        template: document.body.querySelector('#order').outerHTML,
      })
    },
    err => {
      console.log(err)
      document.body.innerHTML += `
      <div class="modal modal-bg" onclick="closeModal(); flipPanelFn(); return false">
        <div class="modal-fg">
          <header id="topbar" class="panel__hd">
            <h1 class="head-branding">
              <img class="branding-logo" src="../static/imgs/logo.svg" alt="Logo" />
            </h1>
          </header>
          <p style="text-align: center; margin: 1em; color: red;">
          您查询的订单不存在，或者查询时效已过!
          </p>
        </div>
      </div>`
    }
    )
})()
