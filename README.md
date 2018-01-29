# 背景
一个表单不仅仅是有input，日期选择等，还可能伴随着大量的图片上传。那图片上传的表单验证怎么办呢？element-ui的upload并没有兼容表单验证。
这时候单独验证图片的上传，而且样式风格要和form的验证一致。处理起来比较麻烦。所以解决办法呢。就是封装一个组件，这个组件是建立在饿了么ui的upload组件
之上的。使用方法也完全和饿了么ui的upload组件一样，只是多了此组件用在饿了么ui的form表单中的验证。写验证的方法和饿了么ui的form文档一致

# 使用方法

* 1.引入此组件（在入口文件中）

```
import FormUpload from './upload/index'; // 根据本组件存放的位置确定，不要照抄此处的写法
Vue.use(FormUpload);
```
* 2.使用此组件


html文件
```
<template>
  <div>
     <el-form  :model="form" ref="formName"  :rules="rules" label-width="120px" size="small">
        <el-form-item label="游戏文件包" prop="gameFileUrl">
          <form-upload 
            v-model="form.gameFileUrl" 
            action=""
            :show-file-list="false"
            :http-request="uploadGamePkg"
          >
            <div class="cd-upload">
              <el-button size="small" type="primary">点击上传</el-button>
            </div> 
          </form-upload>
        </el-form-item>
       </el-form>
  </div>
</template>

```

验证规则

```
     const validateGameFileUrl = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请上传游戏包'));
          } else {
            callback();
          }
        };
     rules: {
        gameFileUrl: [
          { validator: validateGameFileUrl, trigger: '' },
          { required: true, message: '', trigger: '' },
        ],
      },  
    
```
