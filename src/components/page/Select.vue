<template>
	<div style="height: calc(100% - 80px); width: 100%;">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>表单</el-breadcrumb-item>
			  <el-breadcrumb-item>Select 选择器</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		 <div class="content-body">
		 	<div class="group-line">
		 		<div class="line-title">基础用法</div>
				<el-select v-model="value1" placeholder="请选择" v-on:change="selectChange">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value"
				      :key="item.value">
				    </el-option>
				  </el-select>
			</div>
			<div class="group-line">
				<div class="line-title">禁用状态</div>
				<el-select v-model="value2" disabled placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value"
				      :key="item.value">
				    </el-option>
				  </el-select>
			</div>
			<div class="group-line">
				<div class="line-title">可清空单选</div>
				<el-select v-model="value3" clearable placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value"
				      :key="item.value">
				    </el-option>
				  </el-select>
			</div>
			<div class="group-line">
		 		<div class="line-title">基础多选</div>
				<el-select v-model="value4" multiple placeholder="请选择">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value"
				      :key="item.value">
				    </el-option>
				  </el-select>
			</div>
		 </div>
	</div>
</template>

<script>
	export default {
   	 	data() {
            return {
            		options: [{
		          value: '选项1',
		          label: '黄金糕'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
		        }],
		        value1: '',
		        value2: '',
		        value3: '',
		        value4: [],
            }
      },
    
      methods: {
      	 // 选中值发生变化时触发 
	     selectChange(re){
	     	// re: 目前的选中值
	     	alert(re);
	     }
	  }
    }
</script>
