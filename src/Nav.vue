<template>
  <div class="w-nav">
    <div class="w-nav-eye">
      <img :src="src" class="w-nav-eye-img">
    </div>
    <div class="w-nav-main" :class="showLogin ? 'w-nav-main-active': ''">
      <div>
        <a href="javascript:;" class="w-nav-main-new" @click="myOrder">我的订单</a>
        <a href="javascript:;" class="w-nav-main-new" @click="organizer">主办方管理</a>
      </div>
    </div>
    <div class="w-nav-btn" @click="release">
      <img class="w-nav-btn-icon" src="./release.png"/>免费发活动
    </div>
    <div v-if="showLogin" class="w-nav-box">
      <span v-if="loginFlg" class="w-nav-box-logout" @click="logout">退出</span>
      <span v-if="!loginFlg" class="w-nav-box-logout" @click="login">登录</span>
    </div>
  </div>
</template>

<script>
import logo from './logo.png';

export default {
  name: 'w-nav',
  data() {
    return {
      src: '',
    };
  },
  props: {
    loginFlg: {
      type: Boolean,
      default: true,
    },
    showLogin: {
      type: Boolean,
      default: false,
    },
    imgLogo: {
      type: String,
    },
  },
  created() {
    this.src = this.imgLogo ? this.imgLogo : logo;
  },
  watch: {
    loginFlg(val, oldVal) {
      if (val !== oldVal) {
        this.loginFlg = val;
      }
    },
  },
  methods: {
    // 退出
    logout() {
      this.$emit('logout');
    },
    // 我的订单
    myOrder() {
      this.$emit('myOrder');
    },
    //发布
    release() {
      this.$emit('release');
    },
    // 主办方
    organizer() {
      this.$emit('organizer');
    },
    // 登录
    login() {
      this.$emit('login');
    },
  },
};
</script>

<style scoped lang="scss">
@import './nav.scss';
</style>
