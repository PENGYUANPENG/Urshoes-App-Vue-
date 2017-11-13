<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>用户安全</h1>
	</header>
	<ul>
		<li><p>UrShoes ID</p><p>666666</p></li>
		<li><p>昵称</p><p>六个六</p></li>
		<li><p>性别</p><p>男</p></li>
		<li><p>邮箱</p><p>666666@qq.com</p></li>
		<li><p>地区</p><p>广东 广州</p></li>
		<li><p>个性签名</p><p>六个六六个六</p></li>
	</ul>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var footer = document.getElementsByTagName('footer')[0];
			footer.style.display='none';
		},
		destroyed(){
			var footer = document.getElementsByTagName('footer')[0];
			footer.style.display='block';
		}
	}
</script>

<style scoped="scoped">
	main{
		display: block;
		width: 100%;
		background: rgb(250,250,250);
		padding-bottom: 100px;
	}
	header{
		display: block;
		width: 100%;
		height: 40px;
		text-align: center;
	}
	header>h1{
		color: #000;
		font-family: "book antiqua";
		font-size:20px;
		font-weight: 600;
		line-height:50px;
		text-indent: -2em;
	}
	header>img{
		float: left;
		width: 30px;
		margin: 10px auto;
	}
	ul>li>p{
		color: #000;
		font-family: arial;
		font-size: 14px;
		font-weight: 500;
		line-height: 60px;
		text-indent: 10px;
	}
	ul>li>p:nth-of-type(1){
		float: left;
	}
	ul>li>p:nth-of-type(2){
		color: gray;
		float: right;
	}
	ul{
		width: 100%;
		margin: 20px auto;
		overflow: hidden ;
	}
	ul>li{
		width: 100%;
		height: 60px;
		background-color: #fff;
		border-bottom: 1px solid gray;
	}
</style>