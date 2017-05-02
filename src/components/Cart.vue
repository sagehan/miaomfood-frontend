<template>
  <article id="cart">
    <header class="cart__hd">
      <h1>购物车</h1>
    </header>

    <div v-if="isCartEmpty" class="cart__bd">
      <p>您还没有选择菜品哦!</p>
      <p class="toggle">
        <a href="#menu">寻找美味</a>
      </p>
    </div>
    <!-- or -->
    <form v-else class="cart__bd">
      <table class="cart-items">
        <caption>订购信息</caption>

        <thead>
          <tr>
            <th>餐品</th><th>单价</th><th>数量</th><th>金额</th>
          </tr>
        </thead>

        <tfoot>
          <tr>
            <td colspan="4">
              <label for="comment">备注说明：</label>
              <input class="comment-input" type="text" name="comment"  maxlength="15" placeholder="姐姐，麻麻说多放芝士更好吃！" />
            </td>
          </tr>

          <tr class="coupon toggle--coupon">
            <td colspan="3">
              <label>优惠蜜语：</label>
              <input class="coupon-input" type="text" name="coupon-code" placeholder="波罗菠萝蜜" lang="zh-cn" maxlength="15" />
            </td>
            <td class="CNY">-5</td>
          </tr>

          <tr>
            <td colspan="3">外送费</td>
            <td class="CNY">{{gratuity}}</td>
          </tr>

          <tr>
            <td colspan="3">总额</td>
            <td class="CNY">{{total}}</td>
          </tr>
        </tfoot>

        <tbody>
          <template v-for="i in cartItems" >
            <tr class="h-item">
              <td class="p-name">{{cuisineNameOf(i.productID)}}({{i.offers.name}})</td>
              <td class="spec-price">{{specPriceOf(i.productID, i.offers.name)}}</td>
              <td class="qty">{{i.qty}}</td>
              <td class="sub-total CNY">{{specPriceOf(i.productID, i.offers.name) * i.qty}}</td>
            </tr>
          </template>
        </tbody>
      </table>

      <fieldset class="customer">
        <legend>配送信息</legend>

        <ol>
          <li>
            <label for="customer-name">称呼<span class="required">*</span></label>
            <input :value="name" @input="updateCustomer" :class="{inValid: !nameValidity}" id="customer-name" type="text" name="customer-name" required maxlength="10"/>
          </li>

          <li>
            <label for="customer-tel">手机<span class="required">*</span></label>
            <input :value="telephone" @input="updateCustomer" :class="{inValid: !telValidity}" id="customer-tel" type="tel" name="customer-tel" required maxlength="11" />

          </li>

          <li>
            <label for="customerCity">城市<span class="required">*</span></label>
            <select id="customer-city" name="customer-city"><option value="乌鲁木齐" selected>乌鲁木齐市</option></select>
          </li>

          <li>
            <label for="customer-addr">地址<span class="required">*</span></label>
            <textarea :value="address" @input="updateCustomer" :class="{inValid: !addrValidity}" id="customer-addr" type="addr" name="customer-addr" required maxlength="50"></textarea>
          </li>
        </ol>

        <fieldset class="reservation">
          <input type="checkbox" id="is--reserved" name="is--reserved" />
          <label for="is--reserved">预订</label>
          <div class="reservation-option">
            <select :value="delayday" @input="updateReservation" name="delayday">
              <option v-for="o in delayDayOptions" v-bind:value="o.value">
                {{o.text}}
              </option>
            </select>
            <input :value="scheduledtime" @input="updateReservation" type="time" name="scheduledtime" placeholder="请输入时间" maxlength="8" />
          </div>
        </fieldset>
      </fieldset>

      <fieldset class="payment">
        <legend>付款方式</legend>
        <ol>
          <li><input v-model="payment" value="Cash" type="radio" name="payment" id="cash" /><label for="cash">现金付</label></li>
          <li><input v-model="payment" value="wx_pub" type="radio" name="payment" id="wechat" /><label for="wechat">微信支付</label></li>
          <li><input v-model="payment" value="alipay_wap" type="radio" name="payment" id="alipay" /><label for="alipay">支付宝</label></li>
        </ol>
      </fieldset>

      <button
        class="btn btn_submit"
        name="place-order-button" 
        :disabled="!(nameValidity && telValidity && addrValidity)" 
        @click.prevent="checkout" >
        提交订单
      </button>
  </form>
</article>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  const phoneRE = /^1[3|5|7|8|][0-9]{9}$/
  const nameRE = /^[a-zA-Z\u4e00-\u9fa5]{2,8}$/

  export default {
    name: 'cart',

    computed: {
      ...mapGetters([
        'isCartEmpty',
        'cuisineDetailsOf',
        'cuisineNameOf',
        'specPriceOf',
        'total',
      ]),
      ...mapState([
        'gratuity',
        'cartItems',
        'comment',
        'delayDayOptions',
        'reservation',
      ]),
      ...mapState({
        name: state => state.customer.name,
        telephone: state => state.customer.telephone,
        address: state => state.customer.address,
        delayday: state => state.reservation.delayday,
        scheduledtime: state => state.reservation.scheduledtime,
        nameValidity: state => nameRE.test(state.customer.name),
        telValidity: state => phoneRE.test(state.customer.telephone),
        addrValidity: state => !!state.customer.address.trim(),
      }),
      payment: {
        get () {
          return this.$store.state.paymentMethod
        },
        set (value) {
          this.$store.commit('updatePaymentMethod', value)
        },
      }
    },

    methods: {
      updateCustomer (e) {
        let attr = e.target.getAttribute('name').substring(9)
        let value = e.target.value
        this.$store.commit('updateCustomer', [attr, value])
      },
      updateReservation (e) {
        let attr = e.target.getAttribute('name')
        let value = e.target.value
        this.$store.commit('updateReservation', [attr, value])
      },
      ...mapActions([
        'checkout',
      ]),
    }
  }
</script>
