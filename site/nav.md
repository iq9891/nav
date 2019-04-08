# Loading 组件
> 手机端进入之前的 Loading 组件

## 基本用法
> 默认大小通用是 25 px

<br>

<p>
  <w-nav />
</p>
<br>
<br>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|classImgName|loading 图片的 class 名|Object, String|否|无|

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
