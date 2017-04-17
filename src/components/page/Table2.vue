<template>
	<div style="height: calc(100% - 80px); width: 100%;">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>表格</el-breadcrumb-item>
			  <el-breadcrumb-item>固定列表格</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="content-body">
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      fixed
			      prop="date"
			      label="日期"
			      width="150">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      prop="province"
			      label="省份"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      prop="city"
			      label="市区"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="zip"
			      label="邮编"
			      width="120">
			    </el-table-column>
			    <el-table-column
			      fixed="right"
			      label="操作"
			      width="100">
			      <template scope="scope">
			        <el-button type="text" size="small">查看</el-button>
			        <el-button type="text" size="small">编辑</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</div>
	</div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>