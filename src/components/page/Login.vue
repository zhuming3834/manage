<template>
    <div class="login">
        <div class="login-title">仓库管理系统</div>
        <div class="login-form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <img v-on:click="githubClick" src="../../../static/images/github.png" />
            </el-form>
        </div>
    </div>
</template>

<script>
	import VueResource from 'vue-resource';
	import Vue from 'vue';
	Vue.use(VueResource);
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        components: {
            VueResource
        },
        created: function(){
        		// 获取url里面的code
        		var code = this.getUrlData('code') || '';
        		if (code == '') {
        			return;
        		}
        		this.$http.get("https://api.hgdqdev.cn/api/github/user_info",
			{
				params:{
					code: code,
        			}
			}
			).then((response) => {
	            	if(response.data.status == 100){
	            		this.ruleForm.username = response.data.data.login
	            	}else{
	            		
		        }
	        }, (response) => {

	        });
        },
        methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                      	this.$router.push('/table1');
                    } else {
                        this.$router.push('/table1');
                        return false;
                    }
                });
            },
            // github登录点击事件
            githubClick: function(){
            		window.location.href = 'https://github.com/login/oauth/authorize?client_id=75d6ff0d7a95f88acae6&redirect_uri=https://manage.hgdqdev.cn/#/login'
            },
            getUrlData:function(name){
            		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null)
				return unescape(r[2]);
				return null;
            }
        }
    }
</script>

<style scoped>
    .login{
        position: relative;
        width:100%;
        height:100%;
        background-color: #354152;
    }
    .login-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;
    }
    .login-form{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:200px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
    img {
    		width: 80px;
    		height: 80px;
    }
</style>