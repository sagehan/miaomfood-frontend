<template>
  <article id="cart">
    <header class="cart-header">
      <h1>购物车</h1>
    </header>

    <div v-if="isCartEmpty" class="empty-cart">
      <p>您还没有选择菜品哦!</p>
      <p class="toggle">
        <a href="#menu">寻找美味</a>
      </p>
    </div>
    <!-- or -->
    <form v-else class="non-empty-cart">
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
            <td class="CNY">3</td>
          </tr>

          <tr>
            <td colspan="3">总额</td>
            <td class="CNY">150</td>
          </tr>
        </tfoot>

        <tr class="h-item">
          <td class="p-name">激情培根(八寸)</td>
          <td class="spec-price">39</td>
          <td class="qty">1</td>
          <td class="sub-total CNY">39</td>
        </tr>

        <tr class="h-item">
          <td class="p-name">大力水手(八寸)</td>
          <td class="spec-price">35</td>
          <td class="qty">2</td>
          <td class="sub-total CNY">70</td>
        </tr>

        <tr class="h-item">
          <td class="p-name">荔枝芦荟(气泡水)</td>
          <td class="spec-price">18</td>
          <td class="qty">1</td>
          <td class="sub-total CNY">18</td>
        </tr>
        <tr class="h-item">
          <td class="p-name">卡布奇诺</td>
          <td class="spec-price">25</td>
          <td class="qty">1</td>
          <td class="sub-total CNY">25</td>
        </tr>
      </table>

      <fieldset class="customer">
        <legend>配送信息</legend>

        <ol>
          <li>
            <label for="customer-name">称呼<span class="required">*</span></label>
            <input id="customer-name" type="text" name="customer-name" required maxlength="10"/>
          </li>

          <li>
            <label for="customer-tel">手机<span class="required">*</span></label>
            <input id="customer-tel" type="tel" name="customer-tel" required maxlength="11" />

          </li>

          <li>
            <label for="customer-city">城市<span class="required">*</span></label>
            <select id="customer-city" name="customer-city"><option value="乌鲁木齐" selected>乌鲁木齐市</option></select>
          </li>

          <li>
            <label for="customer-addr">地址<span class="required">*</span></label>
            <textarea id="customer-addr" type="addr" name="customer-addr" required maxlength="50"></textarea>
          </li>
        </ol>

        <fieldset class="reservation">
          <input type="checkbox" id="is--reserved" name="is--reserved" />
          <label for="is--reserved">预订</label>
          <div class="reservation-option">
            <select>
              <option value="today" selected>今日</option>
              <option value="tomorrow">明日</option>
            </select>
            <input type="time" name="delivery-time" placeholder="请输入时间" maxlength="8" value="20:00" />
          </div>
        </fieldset>
      </fieldset>

      <fieldset class="payment">
        <legend>付款方式</legend>
        <ol>
          <li><input type="radio" name="payment" id="cash" checked /><label for="cash">现金付</label></li>
          <li><input type="radio" name="payment" id="wechat" /><label for="wechat">微信支付</label></li>
          <li><input type="radio" name="payment" id="alipay" /><label for="alipay">支付宝</label></li>
        </ol>
        <button name="place-order-button" type="submit" disabled>提交订单</button>
      </fieldset>
    </form>
  </article>
 </template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'cart',

    computed: {
      ...mapState(['items', 'customer', 'reservation', 'payment']),
      ...mapGetters(['isCartEmpty', 'total'])
    },

    methods: mapActions(['Checkout'])
  }
</script>
