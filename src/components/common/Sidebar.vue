<template>
	<div class="sidebar">
		<div class="header">
			<div class="header-logo"></div>
			<div class="header-user">
				<div class="header-user-image"></div>
				<div class="header-user-name">
					<el-dropdown @command="handleCommand">
				      <span class="el-dropdown-link">
				        湖工电气<i class="el-icon-caret-bottom el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item command="退出">退出</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				</div>
			</div>
		</div>
		<div class="meau">
			<el-menu default-active="1" class="el-menu-vertical-demo" router="true">
		        <el-submenu index="1">
			        <template slot="title"><i class="iconfont icon-biaoge"></i>表格</template>
			        <el-menu-item index="table1">基础表格</el-menu-item>
			        <el-menu-item index="table2">固定列表格</el-menu-item>
			        <el-menu-item index="table3">筛选表格</el-menu-item>
		        </el-submenu>
		        <el-menu-item index="carousel"><i class="iconfont icon-lunbotu"></i>走马灯</el-menu-item>
		        <el-submenu index="2">
			        <template slot="title"><i class="el-icon-menu"></i>表单</template>
			        <el-menu-item index="radio">Radio单选框</el-menu-item>
			        <el-menu-item index="checkbox">Checkbox多选框</el-menu-item>
			        <el-menu-item index="input">Input 输入框</el-menu-item>
			        <el-menu-item index="select">Select 选择器</el-menu-item>
		        </el-submenu>
		        <el-menu-item index="echarts"><i class="iconfont icon-tubiao"></i>ECharts</el-menu-item>
		        <el-menu-item index="qrcode"><i class="iconfont icon-erweima"></i>二维码</el-menu-item>
		    </el-menu>
		</div>
	</div>
</template>

<script>
	export default {
   	 	data() {
            return {
            		
            }
       },
        methods: {
        		 handleCommand(command) {
		        this.$router.push('/login');
		     }
        }
    }
</script>

<style>
	.el-dropdown-link{
		color: white;
		font-size: 18px;
	}
	.el-menu-item-group__title{
		height: 0px !important;
		padding: 0px !important;
	}
	.el-menu-vertical-demo,.el-submenu__title,.el-menu-item{
		color: white;
		border-radius: 0px;
		background-color: #354152;
	}
</style>