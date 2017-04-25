<template>
	<div class="content-detail">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>表单</el-breadcrumb-item>
			  <el-breadcrumb-item>Checkbox 多选框</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		 <div class="content-body">
		 	<div class="group-line">
		 		<div class="line-title">基础用法</div>
				<el-checkbox v-model="checked">备选项</el-checkbox>
			</div>
			<div class="group-line">
				<div class="line-title">禁用状态</div>
				<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
  				<el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
			</div>
			<div class="group-line">
				<div class="line-title">多选框组</div>
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="复选框 A"></el-checkbox>
				    <el-checkbox label="复选框 B"></el-checkbox>
				    <el-checkbox label="复选框 C"></el-checkbox>
				    <el-checkbox label="禁用" disabled></el-checkbox>
				    <el-checkbox label="选中且禁用" disabled></el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="group-line">
				<div class="line-title">indeterminate 状态</div>
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
			    <div style="margin: 15px 0;"></div>
			    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			    		<el-checkbox v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox>
			    </el-checkbox-group>
			</div>
			<div class="group-line">
				<div class="line-title">可选项目数量的限制</div>
				<el-checkbox-group 
				    v-model="checkedCities1"
				    :min="1"
				    :max="2">
				    <el-checkbox v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox>
				    <!--
				    	component lists rendered with v-for should have explicit keys.
				    	https://segmentfault.com/q/1010000008673359
				    -->
			  	</el-checkbox-group>
			</div>
		 </div>
	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
   	 	data() {
            return {
            		checked: true,
            		checked1: false,
        			checked2: true,
        			checkList: ['选中且禁用','复选框 A'],
        			checkAll: true,
		        checkedCities: ['上海', '北京'],
		        cities: cityOptions,
		        isIndeterminate: true,
		        checkedCities1: ['上海', '北京'],
        			cities: cityOptions
            }
      },
       methods: {
	      handleCheckAllChange(event) {
	        this.checkedCities = event.target.checked ? cityOptions : [];
	        this.isIndeterminate = false;
	      },
	      handleCheckedCitiesChange(value) {
	        let checkedCount = value.length;
	        this.checkAll = checkedCount === this.cities.length;
	        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	      }
	    }
    }
</script>
