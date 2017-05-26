<template>
  <article id="console" class="console panel">
    <header class="panel__hd">
      <h1>用户中心</h1>
    </header>
    <div v-if="isAnonymous" class="panel__bd">
      <form class="session_form" action="/login" accept-charset="UTF-8" method="post">
        <div class="form__hd">
          <p>您还没有登录!</p>
        </div>

        <p class="divide-title"><span>账户登录</span></p>
        <div class="form-input line-item">
          <label class="form-input__hd" for="user_telephone">手机/用户名 </label>
          <input class="form-input__bd" type="text" name="user_telephone" id="user_telephone" autocapitalize="none" maxlength="11" tabindex="1">
        </div>
        <div class="form-input line-item">
          <a class="text_action" href="/forgot-password">已然忘记？</a>
          <label class="form-input__hd" for="password">验证码/密码</label>
          <input class="form-input__bd" type="password" name="password" id="password" tabindex="2">
        </div>
        <input class="submit-button form-action" type="submit" name="commit" value="登录" tabindex="3" data-text="登录" data-loading-text="正在登录" data-disable-with="登录">

        <p class="divide-title"><span>社交账号登录</span></p>
        <div class="social-login">
          <a rel="nofollow" href="" class="icon-wechat" target="_self" title="微信登录"></a>
          <a rel="nofollow" href="" class="icon-qq" target="_self" title="QQ登录"></a>
          <a rel="nofollow" href="" class="icon-weibo" target="_self" title="新浪微博登录"></a>
        </div>

        <p class="copy"><a href="">注册</a></p>
      </form>
    </div>
  </article>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  // const phoneRE = /^1[3|5|7|8|][0-9]{9}$/
  // const nameRE = /^[a-zA-Z\u4e00-\u9fa5]{2,8}$/

  export default {
    name: 'console',

    computed: {
      ...mapState({
        name: state => state.user.name,
      }),

      ...mapGetters([
        'isAnonymous',
      ]),
    },
  }
</script>
