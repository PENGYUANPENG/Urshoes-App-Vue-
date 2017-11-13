<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>设置</h1>
	</header>
	<div id="main">
		<ul>
			<li><router-link to='./safe'>账户安全<img src="../../assets/image/go.png" alt="" /></router-link></li>
			<li><router-link to='./about'>关于UrShoes<img src="../../assets/image/go.png" alt="" /></router-link></li>
			<li><router-link to='./xieyi'>用户协议<img src="../../assets/image/go.png" alt="" /></router-link></li>
			<li @click="clear">清除缓存<p>{{msg}}&nbsp;&nbsp;</p></li>
		</ul>
	</div>
	<div id="unlogin">
	<mt-button type="danger" size="large" class='unnlo'>退出登录</mt-button></div>
	</main>
</template>

<script>
	export default{
		data(){
				return{
					"msg":''
				}
			},
		methods:{
			back(){
				this.$router.go(-1)
			},
			clear(){
				this.msg='0M'
			}
		},
		mounted(){
			this.msg=Math.random().toFixed(2)*10+'M';
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
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgb(250,250,250);
		background-size: 100% 100%;
		background-attachment: fixed;
		overflow: hidden;
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
	#main{
		width: 100%;
		background-color: rgb(250,250,250);
	}
	#main>ul{
		width:100%;
		padding-top: 10px;
	}
	#main>ul>li{
		display: block;
		width: 100%;
		height: 30px;	
		margin: 0 auto;		
		border-bottom: 1px solid gray;
		background: #fff;
		padding: 10px 0;
		line-height: 30px;
		font-size: 18px;
		font-family:arial;
		font-weight:400;
		color:#000;
		text-indent: 1em;
	}
	#main>ul>li>p{
		float: right;
		color: darkgray;
	}
	#main>ul>li img{
		height: 70%;
		margin: 10px auto;
		float: right;
	}
	#unlogin{
		width: 80%;
		height: 80px;
		margin: 10px auto;
	}
	a{
		color: #000;
	}
</style>