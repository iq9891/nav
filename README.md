# c端 Nav 组件
> c端头部

## 基本用法

<br>

  &lt;w-nav
    orgid="100015"
    :countrycodeAction="countrycodeAction"
    :sendAction="sendAction"
    :loginAction="loginAction"
    :sendEnglishAction="sendEnglishAction"
    :loginEnglishAction="loginEnglishAction"
    :logoutAction="loginEnglishAction"
    :sendEmailEnglishAction="loginEnglishAction"
    domain=""
  /&gt;
<br>
<br>

## API

### 方法

|参数|说明|
|---|----|
|logout|点击退出按钮emit出方法|
|organizer|点击主办方管理按钮emit出方法|
|release|点击发布按钮emit出方法|
|myOrder|点击我的订单按钮emit出方法|
|sendEmail|英文版点击我的订单发送成功方法|

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|loginFlg|是否登录|Boolean|是|false|
|imgLogo|主办logo|String|否|活动易logo|
|login|登录不同版本文案|String|否|登录|
|logout|退出不同版本文案|String|否|退出|
|order|我的订单不同版本文案|String|否|我的订单|
|imgLogo|主板图案|String|否|无|
|orgid|主办id|String|是|-|
|sendAction|发送验证码接口地址(中文版)|String|是|-|
|sendEnglishAction|发送验证码接口地址(英文版)|String|是|-|
|sendEmailEnglishAction|点击订单发送邮件接口地址(英文版)|String|是|-|
|domain|设置cookie登录状态的domain|String|否|'evente.cn'|
|countrycodeAction|获取countrycode接口地址|String|是|-|
|logoutAction|用户退出接口地址|String|是|-|
|loginAction|用户登录接口地址(中文版)|String|是|-|
|loginEnglishAction|用户登录接口地址(英文版)|String|是|-|
|loginClose|关闭弹框|Function|是|() => {}|
|loginSuccess|登录成功|Function|是|() => {}|
|langHandle|点击语言版本的方法。如果有点击语言之后保存语言调用，没有点击保存之后刷新。|Function|否|无|
