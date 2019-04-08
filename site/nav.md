# c端header 组件
> c端头部

## 基本用法

<br>

<p>
  <w-nav />
</p>
<br>
<br>

## API

|参数|说明|
|---|----|
|logout|退出按钮方法|
|login|登录按钮方法|
|organizer|主办方管理按钮方法|
|release|发布按钮方法|
|myOrder|我的订单按钮方法|

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|loginFlg|是否登录|Boolean|否|无|
|showLogin|是否需要展示登录退出按钮|Boolean|否|false|
|imgLogo|主办logo|String|否|活动易logo|

<script>
import WNav from '../src/Nav';

export default {
  data() {
    return {
      status: false,
    };
  },
  components: {
    WNav,
  },
};
</script>
