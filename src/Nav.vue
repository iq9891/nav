<template>
  <div class="w-nav">
    <div class="w-nav-box">
      <div class="w-nav-box-eye">
        <img :src="imgLogo || logo" class="w-nav-box-eye-img">
      </div>
      <div class="w-nav-box-main">
        <a href="javascript:;" class="w-nav-box-main-new" @click="myOrder">{{order}}</a>
        <a v-if="isChina" href="javascript:;" class="w-nav-box-main-new" @click="organizer">主办方管理</a>
        <span v-if="loginFlg" class="w-nav-box-main-new" @click="logoutFun">{{logut}}</span>
        <span v-if="!loginFlg" class="w-nav-box-main-new" @click="loginFun">{{login}}</span>
        <span class="w-nav-box-main-new" @click="languageFun">{{language}}</span>
        <div v-if="isChina" class="w-nav-box-main-btn" >
          <img @click="release" class="w-nav-box-main-btn-icon" src="./release.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-nav',
  data() {
    return {
      logo: 'https://static2.evente.cn/static/img/logo_nav_201804081.png',
    };
  },
  props: {
    isChina: {  // 是中文版为true
      type: Boolean,
      default: true,
    },
    loginFlg: { // 是否登录
      type: Boolean,
      default: false,
    },
    login: { // 登录文案
      type: String,
      default: '登录',
    },
    logut: { // 退出文案
      type: String,
      default: '退出',
    },
    order: { // 我的订单文案
      type: String,
      default: '我的订单',
    },
    language: { // 语言文案
      type: String,
      default: 'English',
    },
    imgLogo: { // 主板图案
      type: String,
    },
  },
  watch: {
    loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    },
    isChina(val, oldVal) {
      if (val !== oldVal) {
        this.isChina = val;
      }
    },
    login(val, oldVal) {
      if (val !== oldVal) {
        this.login = val;
      }
    },
    logut(val, oldVal) {
      if (val !== oldVal) {
        this.logut = val;
      }
    },
    order(val, oldVal) {
      if (val !== oldVal) {
        this.order = val;
      }
    },
    language(val, oldVal) {
      if (val !== oldVal) {
        this.language = val;
      }
    },
  },
  methods: {
    // 语言
    languageFun() {
      this.$emit('language');
    },
    // 我的订单
    myOrder() {
      this.$emit('myOrder');
    },
    // 发布
    release() {
      this.$emit('release');
    },
    // 主办方
    organizer() {
      this.$emit('organizer');
    },
    // 登录
    loginFun() {
      this.$emit('login');
    },
    // 退出
    logoutFun() {
      this.$emit('logout');
    },
  },
};
</script>

<style scoped lang="scss">
@import './nav.scss';
</style>
