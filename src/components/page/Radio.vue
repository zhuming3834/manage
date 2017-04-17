<template>
	<div style="height: calc(100% - 80px); width: 100%;">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>表单</el-breadcrumb-item>
			  <el-breadcrumb-item>Radio 单选框</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		 <div class="content-body">
		 	<div class="group-line">
		 		<div class="line-title">基础用法</div>
				<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
  				<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
			</div>
			<div class="group-line">
				<div class="line-title">禁用状态</div>
				<el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
  				<el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
			</div>
			<div class="group-line">
				<div class="line-title">单选框组</div>
				<el-radio-group v-model="radio2">
				    <el-radio :label="3">备选项</el-radio>
				    <el-radio :label="6">备选项</el-radio>
				    <el-radio :label="9">备选项</el-radio>
				</el-radio-group>
			</div>
			<div class="group-line">
				<div class="line-title">按钮样式</div>
				<el-radio-group v-model="radio3">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				  </el-radio-group>
				  <div style="margin: 15px 0;"></div>
				  <el-radio-group v-model="radio4">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京" :disabled="true"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				  </el-radio-group>
				  <div style="margin: 15px 0;"></div>
				  <el-radio-group v-model="radio5" :disabled="true">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				  </el-radio-group>
			</div>
		 </div>
	</div>
</template>

<script>
	export default {
   	 	data() {
            return {
            		radio: '1',
            		radio2: '3',
            		radio3: '上海',
		        radio4: '上海',
		        radio5: '上海'
            }
      },
    }
</script>
