# 头部组件

> Vue.js 2.x C端的业务组件。

[![emnav](https://img.shields.io/npm/v/emnav.svg?style=flat-square)](https://www.npmjs.org/package/emnav)
[![NPM downloads](http://img.shields.io/npm/dm/emnav.svg?style=flat-square)](https://npmjs.org/package/emnav)
[![Package Quality](http://npm.packagequality.com/shield/emnav.svg)](http://packagequality.com/#?package=emnav)
[![NPM downloads](https://img.shields.io/npm/dt/emnav.svg?style=flat-square)](https://npmjs.org/package/emnav)

[![Sauce Labs Test Status (for master branch)](https://badges.herokuapp.com/browsers?googlechrome=7&firefox=7&microsoftedge=10&iexplore=9&safari=10.10)](https://saucelabs.com/u/_wmhilton)

## 环境

- node 9

## API

### 方法

|参数|说明|
|---|----|
|logout|点击退出按钮emit出方法|
|organizer|点击主办方管理按钮emit出方法|
|release|点击发布按钮emit出方法|
|myOrder|点击我的订单按钮emit出方法|

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|englishEnter|是否开启英文版|Boolean|是|false|
|loginFlg|是否登录|Boolean|是|false|
|imgLogo|主办logo|String|否|活动易logo|
|login|登录不同版本文案|String|否|登录|
|logout|退出不同版本文案|String|否|退出|
|order|我的订单不同版本文案|String|否|我的订单|
|imgLogo|主板图案|String|否|无|
|orgid|主办id|String|是|-|
|sendAction|发送验证码接口地址(中文版)|String|是|-|
|sendEnglishAction|发送验证码接口地址(英文版)|String|是|-|
|domain|设置cookie登录状态的domain|String|否|'evente.cn'|
|countrycodeAction|获取countrycode接口地址|String|是|-|
|logoutAction|用户退出接口地址|String|是|-|
|loginAction|用户登录接口地址(中文版)|String|是|-|
|loginEnglishAction|用户登录接口地址(英文版)|String|是|-|
|sendEmailEnglishAction|点击订单发送邮件接口地址(英文版)|String|是|-|
|loginClose|关闭弹框|Function|是|() => {}|
|loginSuccess|登录成功|Function|是|() => {}|
|langHandle|点击语言版本的方法。如果有点击语言之后保存语言调用，没有点击保存之后刷新。|Function|否|无|

## 安装

```
$ yarn add emnav
```

## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 常用命令 ( package.json 的 scripts 中可以找到所有命令)

``` bash
# 安装依赖( package.json 中的 dependencies 部分 ) dependencies
npm install

# development 环境的本地热加载服务，访问地址: localhost:8080
# 在 config 中修改端口号
npm start

# 利用 jest 单元测试
npm test

# 打包组件库
npm run build

# 打包官网
npm run build:site

# 打包官网，打包并查看捆绑分析器报表
npm run build --report

# JavaScript 的代码规范监测
npm run eslint

# style 的代码规范监测
npm run stylelint

# 进行 style 和 JavaScript 的规范检测
npm run lint-staged

# 上传单元测试覆盖率报告
npm run codecov
```

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。
