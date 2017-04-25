<template>
	<div class="content-detail">
		<div class="content-header">
			<el-breadcrumb separator="/">
			  <el-breadcrumb-item>二维码</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		 <div class="content-body">
		 	<div class="group-line" style="padding-top: 20px;">
		 		<a href="https://github.com/davidshimjs/qrcodejs">qrcodejs的使用</a>
		 		<div id="qrcodejs" style="height: 195px; width: 195px; margin-top: 20px;"></div>
		 	</div>
		 	<div class="group-line" style="padding-top: 20px;">
		 		<a href="https://github.com/kciter/qart.js">qartjs的使用</a>
		 		<div id="qartjs" style="height: 195px; width: 195px; margin-top: 20px;"></div>
		 	</div>
		 </div>
	</div>
	
</template>

<script>
	import QArt from 'qartjs';
	export default {
   	 	data() {
            return {
            		
            }
      },
      mounted() {
	     this.getQrcodejs();
	     this.getQartjs();
	  },
      methods: {
	    getQrcodejs(){
			var urlStr = "二维码携带的信息";
			var qrcode1 = new QRCode(document.getElementById("qrcodejs"), {
				text: urlStr,
			    width: 195,
			    height: 195,
			    colorDark : "#000000",
			    colorLight : "#ffffff",
			    correctLevel : QRCode.CorrectLevel.H
			});
		},
		getQartjs(){
			var qart = new QArt({
			  value: "二维码携带的信息",
			  imagePath: '../../../static/images/logo.png',
			  filter: 'color',
			  size: 195
			});
			qart.make(document.getElementById('qartjs'));
		},
	  }
   }
</script>

<style>
</style>