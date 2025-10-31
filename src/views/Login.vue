<template>
  <div class="login-container">
    <div id="login-card">
      <!--扫码-->
      <div class="left-area">
        <div class="left-title">扫码登录</div>
        <div class="qrcode-img">
          <img src="../assets/images/qc.png" alt="" sizes="" srcset="">
        </div>
      </div>
      <!--登录-->
      <div class="right-area">
        <div class="right-title">Login</div>
        <div class="login-form">
          <!--登录模式-->
          <div class="login-form_switch">
            <span class="login-form_model"
                  :class="{ 'active': loginType === 'username' }"
                  @click="switchLoginType('username')">用户名登录</span>
            <span class="login-form_model"
                  :class="{ 'active': loginType === 'phone' }"
                  @click="switchLoginType('phone')">短信登录</span>
            <!-- 动态下划线指示器 -->
            <div class="indicator" :class="loginType"></div>
          </div>
          <!--用户名登录的表单-->
          <el-form  v-if="loginType === 'username'">
            <el-form-item >
              <el-input   prefix-icon="User" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item >
              <el-input   type="password" :prefix-icon="Lock" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item >
              <el-input class="content-code" :prefix-icon="Promotion" placeholder="请输入验证码" >
                <template #suffix>
                  <captcha-code
                      :width="80"
                      :height="28"
                      @change="onCaptchaChange"
                      style="margin-right: -8px; cursor: pointer;"
                  />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">登录</el-button>
            </el-form-item>
          </el-form>
          <!--手机号登录的表单-->
          <el-form  v-if="loginType === 'phone'">
            <el-form-item >
              <el-input   prefix-icon="Phone" placeholder="请输入手机号" />
            </el-form-item>
            <el-form-item >
              <el-input class="content-code" :prefix-icon="Message" placeholder="请输入验证码" >
                <!-- #suffix后缀插槽 -->
                <template #suffix>
                  <el-button
                      link
                      type="primary"
                      :disabled="countdown > 0"
                      @click="getSMS"
                      class="captcha-btn"
                  >
                    {{ countdown > 0 ? `${countdown}s后重新获取` : '获取验证码' }}
                  </el-button>
                </template>
              </el-input>
              <span class="content-code_img"></span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doLogin">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="tip-msg">* 温馨提示：建议使用谷歌、Microsoft Edge，版本 79.0.1072.62 及以上浏览器，360浏览器请使用极速模式</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// 引入图标
import {Lock,Promotion,Message } from '@element-plus/icons-vue'

import { ref } from 'vue'

// 默认选择用户名登录
const loginType = ref('username')
// 获取手机短信验证码的默认值
const countdown = ref(0)


// 使用方法处理点击事件
const switchLoginType = (type) => {
  loginType.value = type
  // 可以在这里添加其他逻辑
  // todo 切换逻辑
}

// 模拟图形验证码，实际后端获取
import CaptchaCode from 'vue-captcha-code'

const captchaValue = ref('')

const onCaptchaChange = (code) => {
  captchaValue.value = code
}

/**
 * 手机短信验证码
 */
const getSMS = () => {
  // 发送获取验证码请求
  console.log('获取验证码')

  // 开始倒计时
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}


//
const doLogin = () =>{
  console.log("开始请求登录")
}
</script>
<style lang="less" scoped>

.login-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 全屏高度 */
  width: 100vw;            /* 全屏宽度 */
}

#login-card {
  display: flex;
  width: 950px;
  height: 550px;
  .left-area, .right-area {
    flex: 1; /* 左右各占一半 */
  }

}

.left-area {
  background-color: #F2F6FC;
  .qrcode-img {
    // 左右居中
    margin: 10px auto 10px;
    width: 300px;
    height: 300px;

    img {
      padding: 15px; /* 图片内容与边框的距离 */
      border: 1px solid #d1d1d1; /* 浅灰色边框 */
      border-radius: 10px; /* 可选：添加圆角 */
      width: 100%;      // 使用百分比，更灵活
      height: 100%;
    }
  }
}


// 共享样式，注意逗号
.left-title, .right-title{
  height: 130px;
  line-height: 130px;
  font-size: 32px;
  font-weight: 800;
  text-align: center;
}

.right-title {
  color: dodgerblue;
}


.right-area {
  border: 1px solid #409Eff;
  border-radius: 3px;
  background-color: #fff;

  /*登录表单*/
  .login-form {
    padding: 0 50px 50px;

    .login-form_switch {
      position: relative;  // 关键：为下划线指示器定位提供参照
      width: 100%;
      padding: 10px 0;
      border-bottom: 1px solid #e4e7ed;

      .login-form_model {
        display: inline-block;
        text-align: center;
        width: 80px;
        margin: 0 5px;
        //padding-right: 10px;
        cursor: pointer;
        color: gray;

      }
      // 当前被激活的模式
      .login-form_model.active {
        color: black;
      }

      /* 动态下划线指示器 */
      .indicator {
        position: absolute;
        width: 90px;
        height: 2px;
        background: dodgerblue;
        bottom: 0;
        transition: all 0.3s ease;
      }
      .indicator.username {
        left: 0;
      }
      .indicator.phone {
        left: 90px;
      }

    }

    .el-form {
      max-width: 600px;
      margin-top: 30px;
    }

    /*输入框*/
    .el-input {
      width: 100%;
      height: 40px;
    }

    /*登录按钮*/
    .el-button {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      margin: 20px 0;
    }

    /*提示*/
    .tip-msg {
      margin-top: 30px;
      color: #a8abb2; // 字体颜色
      font-size: 12px;
    }

    /*获取验证码的样式*/
    .captcha-btn {
      padding: 0 8px;
      height: 24px;
      font-size: 12px;
      white-space: nowrap;
    }
  }
}


</style>
