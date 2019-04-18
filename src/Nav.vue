<template>
  <div class="w-nav">
    <div class="w-nav-box">
      <div class="w-nav-box-eye">
        <img :src="imgLogo || logo" class="w-nav-box-eye-img">
      </div>
      <div class="w-nav-box-main">
        <a href="javascript:;" @mouseover="mouseover(true)" @mouseout="mouseout(true)" class="w-nav-box-main-new" @click="myOrder">{{order}}
          <div v-show="orderFlag" class="w-nav-box-main-new-erweima">
            <img class="w-nav-box-main-new-erweima-img" :src="orderSrc" alt="">
            <p class="w-nav-box-main-new-erweima-text">扫码查订单</p>
          </div>
        </a>
        <a v-if="isChina" @mouseover="mouseover(false)" @mouseout="mouseout(false)" href="javascript:;" class="w-nav-box-main-new" @click="organizer">主办方管理
          <div v-show="erweimaFlag" class="w-nav-box-main-new-erweima" style="left:-20px;">
            <img class="w-nav-box-main-new-erweima-img" :src="erweimaSrc" alt="">
            <p class="w-nav-box-main-new-erweima-text">扫一扫，下载app</p>
          </div>
        </a>
        <a v-if="loginFlg" href="javascript:;" class="w-nav-box-main-new" @click="logoutFun">{{logut}}</a>
        <a v-if="!loginFlg" href="javascript:;" class="w-nav-box-main-new" @click="loginFun">{{login}}</a>
        <a href="javascript:;" class="w-nav-box-main-new" @click="languageFun">{{language}}</a>
        <div v-if="isChina" class="w-nav-box-main-btn" >
          <img @click="release" class="w-nav-box-main-btn-icon" src="./release.png"/>
        </div>
      </div>
    </div>
    <div v-if="showMask" class="w-nav-mask"></div>
    <div v-if="showMask" class="w-nav-modal">
      <p class="w-nav-modal-close">
        <img @click="close" src="https://static2.evente.cn/static/img/login-icon-close1.png">
      </p>
      <p class="w-nav-modal-title">Ticket Buyer</p>
      <div class="w-nav-modal-box">
        <input v-model="email" class="w-nav-modal-box-input" type="text" placeholder="Email Address">
      </div>
      <div @click="submit" class="w-nav-modal-btn" :class="email?'w-nav-modal-btn-active':'w-nav-modal-btn-disabled'">Submit</div>
      <div v-if="error" class="w-nav-modal-tip">
        <img src="https://static2.evente.cn/static/img/login-icon-error1.png">
        Check your email
      </div>
    </div>
  </div>
</template>

<script>
import orderSrc from './order';
import erweimaSrc from './erweima';

export default {
  name: 'w-nav',
  data() {
    return {
      erweimaSrc,
      orderSrc,
      orderFlag: false,
      erweimaFlag: false,
      email: '', //邮箱
      error: false, //错误提示
      showMask: false, //弹窗展示
      logo: 'https://static2.evente.cn/static/img/logo_nav_201804081.png',
    };
  },
  props: {
    lang: {  // 什么语言
      type: String,
      default: 'zh_HK',
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
  computed: {
    isChina() {
      return this.lang === 'zh_HK';
    },
  },
  methods: {
    // 语言
    languageFun() {
      this.$emit('language');
    },
    // 我的订单
    myOrder() {
      if (!this.isChina) {
        this.showMask = true;
      }
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
    mouseover(data) {
      if (data) {
        this.orderFlag = true;
      } else {
        this.erweimaFlag = true;
      }
    },
    mouseout(data) {
      if (data) {
        this.orderFlag = false;
      } else {
        this.erweimaFlag = false;
      }
    },
    // 登录
    loginFun() {
      this.$emit('login');
    },
    // 退出
    logoutFun() {
      this.$emit('logout');
    },
    // 关闭弹窗
    close() {
      this.showMask = false;
    },
    // 提交
    submit() {
      if (!this.emailTest(this.email)) {
        this.error = true;
      } else {
        this.error = false;
        // ajax
      }
    },
    emailTest(val) {
      /* eslint-disable */
      //Email
      const emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      /* eslint-disable */
      return emailPattern.test(val);
    },
  },
};
</script>

<style scoped lang="scss">
@import './nav.scss';
</style>
