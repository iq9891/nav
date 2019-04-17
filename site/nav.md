# c端header 组件
> c端头部

## 基本用法

<br>

<p>
  <w-nav />
</p>
<br>
<br>

## 修改文案

<br>

<p>
  <div>login: <input type="text" v-model="loginText"></div>
  <div>logut: <input type="text" v-model="logutText"></div>
  <div>order: <input type="text" v-model="orderText"></div>
  <br>
  <button @click="lang = !lang">{{lang ? '中文' : '英文'}}</button>
  <button @click="loginFlg = !loginFlg">{{loginFlg ? '登出' : '登录'}}</button>
  <br>
  <br>
  <br>
  <br>
  <w-nav :login="loginText" :logut="logutText" :lang="lang ? 'zh_HK' : 'en_US'" :order="orderText" :language="lang ? '中文' : 'English'" :loginFlg="loginFlg" />
</p>
<br>
<br>

## API

### 方法

|参数|说明|
|---|----|
|logout|点击退出按钮emit出方法|
|login|点击登录按钮emit出方法|
|organizer|点击主办方管理按钮emit出方法|
|release|点击发布按钮emit出方法|
|myOrder|点击我的订单按钮emit出方法|
|language|点击语言版本emit出方法|

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|loginFlg|是否登录|Boolean|是|false|
|lang|当前版本是否是中文|String|是|'zh_HK'|
|imgLogo|主办logo|String|否|活动易logo|
|login|登录不同版本文案|String|否|登录|
|logut|退出不同版本文案|String|否|退出|
|order|我的订单不同版本文案|String|否|我的订单|
|language|语言不同版本文案|String|否|语言|

<script>
import WNav from '../src/Nav';

export default {
  data() {
    return {
      loginText: '登录',
      logutText: '退出',
      orderText: '我的订单',
      status: false,
      lang: false,
      loginFlg: false,
    };
  },
  components: {
    WNav,
  },
};
</script>
