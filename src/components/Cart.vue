<template>
  <article id="cart" class="cart panel">
    <header class="panel__hd">
      <h1>购物车</h1>
    </header>

    <div v-if="isCartEmpty" class="panel__bd">
      <p class="empty-reminder">您还没有选择菜品哦!</p>
    </div>
    <!-- or -->
    <form v-else class="panel__bd steps">

      <div class="step-wrap">
        <table class="cart-items">
          <caption class="step__hd">订购信息</caption>
          <thead>
            <tr>
              <th>餐品</th><th>单价</th><th>数量</th><th>金额</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="i in cartItems" >
              <tr class="h-item">
                <td class="p-name">{{cuisineNameOf(i.productID)}}({{i.offers.name}})</td>
                <td class="spec-price">{{specPriceOf(i.productID, i.offers.name)}}</td>
                <td class="qty">{{i.qty}}</td>
                <td class="sub-total money">{{specPriceOf(i.productID, i.offers.name) * i.qty}}</td>
              </tr>
            </template>
          </tbody>
        </table>

        <fieldset class="form-input line-item">
            <label class="form-input__hd" for="comment">备注说明</label>
            <input class="form-input__bd comment-input" type="text" name="comment"  maxlength="15" />
        </fieldset>

        <div class="charge-info">
          <fieldset class="form-input line-item">
            <label class="form-input__hd">优惠蜜语</label>
            <input class="form-input__bd coupon-input" type="text" name="coupon-code" maxlength="15" />
          </fieldset>

          <div class="line-item">
            <span>送餐费：</span>
            <span class="money">{{gratuity}}</span>
          </div>

          <div class="cart-total line-item">
            <span>总额：</span>
            <span class="money">{{total}}</span>
          </div>
        </div>
      </div>

      <fieldset class="step-wrap customer">
        <legend class="step__hd">配送信息</legend>

        <ol class="step__bd">
          <li class="form-input line-item">
            <label class="form-input__hd"
            for="customer-name">称呼<span class="asterisk">*</span></label>
            <input class="form-input__bd" :value="name" @input="updateCustomer" :class="{inValid: !nameValidity}" id="customer-name" type="text" name="customer-name" required maxlength="10"/>
          </li>

          <li class="form-input line-item">
            <label class="form-input__hd" for="customer-tel">手机<span class="asterisk">*</span></label>
            <input class="form-input__bd" :value="telephone" @input="updateCustomer" :class="{inValid: !telValidity}" id="customer-tel" type="tel" name="customer-tel" required maxlength="11" />
          </li>

          <li class="form-input line-item">
            <label class="form-input__hd" for="customerCity">城市<span class="asterisk">*</span></label>
            <div class="form-input__bd">
              <select id="customer-city" name="customer-city" >
                <option value="乌鲁木齐" selected>乌鲁木齐市</option>
              </select>
            </div>
          </li>

          <li class="form-input line-item">
            <label class="form-input__hd" for="customer-addr">地址<span class="asterisk">*</span></label>
            <textarea class="form-input__bd" :value="address" @input="updateCustomer" :class="{inValid: !addrValidity}" id="customer-addr" type="addr" name="customer-addr" required maxlength="50"></textarea>
          </li>
        </ol>
      </fieldset>

      <div class="step-wrap">
        <fieldset class="payment">
          <legend class="step__hd">付款方式</legend>

          <fieldset class="reservation form-input line-item">
            <input type="checkbox" id="is--reserved" name="is--reserved" />
            <label class="form-input__hd" for="is--reserved">预订</label>
            <fieldset class="form-input__bd reservation-options">
              <select class="option__delayday" :value="delayday" @input="updateReservation" name="delayday">
                <option v-for="o in delayDayOptions" v-bind:value="o.value">
                  {{o.text}}
                </option>
              </select>
              <input class="option__time" :value="scheduledtime" @input="updateReservation" type="time" name="scheduledtime" placeholder="请输入时间" maxlength="8" />
            </fieldset>
          </fieldset>

          <ol class="step__bd">
            <li class="payment-input">
              <input v-model="payment" value="Cash" type="radio" name="payment" id="pay-by-cash" />
              <label for="pay-by-cash">现金付</label>
            </li>
            <li class="payment-input">
              <input v-model="payment" value="wx_pub" type="radio" name="payment" id="pay-by-wx" />
              <label for="pay-by-wx">微信支付</label>
            </li>
            <li class="payment-input">
              <input v-model="payment" value="alipay_wap" type="radio" name="payment" id="pay-by-alipay" />
              <label for="pay-by-alipay">支付宝</label>
            </li>
          </ol>
        </fieldset>

        <input
          class="submit-button"
          name="place-order-button"
          type="submit"
          value="提交订单"
          :disabled="!(nameValidity && telValidity && addrValidity)"
          @click.prevent="checkout" >
        </input>
      </div>
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
