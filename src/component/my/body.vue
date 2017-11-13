<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>身体测量</h1>
	</header>
	<div id="main">
		<ul>
			
			<li><img src="../../assets/image/shengao.png" alt="" /><p>身高</p><p>180 cm&nbsp;</p></li>
			<li><img src="../../assets/image/tizhong.png"/><p>体重</p><p>88 kg&nbsp;</p></li>
			<li><img src="../../assets/image/xiezi.png"/><p>鞋码</p><p>43 码&nbsp;</p></li>
			<li><img src="../../assets/image/jinshi.png" alt="" /><p>近视度数</p><p>左眼:200度 右眼:200度&nbsp;</p></li>
			<li><img src="../../assets/image/sanwei.png"/><p>三围</p></li>
		</ul>
	</div>
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
		height: 30px;
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
	#main{
		width: 100%;
		background-color: rgb(250,250,250);
	}
	#main>ul{
		width:100%;
		overflow: hidden;
		padding-top: 10px;
	}
	#main>ul>li{
		display: block;
		width: 100%;
		height: 50px;	
		margin: 0 auto;		
		border-bottom: 1px solid gray;
		background: #fff;
		padding: 10px 0;
		margin-bottom: 10px;
	}
	#main>ul>li p{
		line-height: 50px;
		font-size: 14px;
		font-family:arial;
		font-weight:400;
		color:#000;
		font-family: "微软雅黑";
	}
	#main>ul>li img:nth-of-type(1){
		margin: 10px 20px;
		height: 40px;
		float: left;
	}
	#main>ul>li p:nth-of-type(1){
		float: left;
	}
	#main>ul>li p:nth-of-type(2){
		float: right;
		color: darkgray;
	}
	input{

		height: 100px;
		border: none;
		font-size: 50px;
		box-sizing: border-box;
		color:gray;
		outline: none;
	}
</style>