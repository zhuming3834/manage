<template>
	<div style="height: calc(100% - 80px); width: 100%;">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>走马灯</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		 <div class="content-body">
		 	<div>
				<el-carousel :interval="5000" arrow="always">
				    <el-carousel-item v-for="item in banners" :key="item.name">
				      <img v-bind:src="item.imageUrl" v-bind:alt="item.name" />
				    </el-carousel-item>
			    </el-carousel>
			</div>
		 </div>
	</div>
</template>

<script>
	export default {
   	 	data() {
            return {
            		banners: [{
            			imageUrl: "../../../static/images/banner1.jpg",
            			name: "张曼玉"
            		},{
            			imageUrl: "../../../static/images/banner2.jpg",
            			name: "王菲"
            		},{
            			imageUrl: "../../../static/images/banner3.jpg",
            			name: "张学友"
            		},
            		{
            			imageUrl: "../../../static/images/banner4.jpg",
            			name: "刘德华"
            		},{
            			imageUrl: "../../../static/images/banner5.jpg",
            			name: "周润发"
            		},{
            			imageUrl: "../../../static/images/banner6.jpeg",
            			name: "周星驰"
            		}]
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
	.el-carousel,.el-carousel__container,.el-carousel__item,img{
		height: 300px;
		width: 100%;
	}
</style>