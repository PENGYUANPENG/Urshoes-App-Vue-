<template>
	<main>
	<div id="login">
		<img src="../../assets/image/thelogo.png" alt="" />
		<h1>Ur Shoes</h1>
	<ul>
		<li><img src="../../assets/connect/login.png"/><input type="" name="" id="" value="" placeholder="用户名"/></li>
		<li><img src="../../assets/image/mima.png"/><input type="password" placeholder="密码"/></li>	
		<li><img src="../../assets/image/mima.png"/><input type="password" placeholder="确认密码"/></li>	
		<li><img src="../../assets/image/email.png"/><input type="email" placeholder="请输入您的邮箱"/></li>	
	</ul>
	</div>
	<button>注册</button>
	<img src="../../assets/image/close.png" alt="" id="close" @click="back"/>
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
		position: fixed;
		width: 100%;
		height: 100%;
		background: url(../../assets/image/mybg.jpg);
		overflow: hidden;
		background-size: 100% 100%;
		background-attachment: fixed;
	}
	#login{
		width: 100%;
		background-color: transparent;
		text-align: center;
	}
	#login>img{
		width: 25%;
		border: 1px solid gray;
		border-radius: 50%;
		margin-top: 100px;
	}
	#login>h1{
		color: #fff;
		width:100%;
		font-size:24px;
	}
	ul{
		width: 60%;
		margin:0 auto;
		overflow: hidden;
		margin-top:20%;
	}
	#login>ul img{
		width: 10%;
		float: left;
	}
	#login>ul input{
		width: 75%;
		height: 18.2px;
		background-color: transparent;
		outline: none;
		font-size: 14px;
		border: none;
		border-bottom: 1px solid gray;
	}
	li{
		width: 100%;
		margin: 10px 10px;
		box-sizing: border-box;
		height: 20px;
		background-color: transparent;
	}
	button{
		display: block;
		width: 40%;
		height: 35px;
		font-size: 14px;
		margin: 10px auto;
		background-color:skyblue;
		border: none;
		border-radius:5px;
	}
	#close{
		position: fixed;
		width: 20px;
		height: 20px;
		right: 10px;
		bottom: 10px;
	}
</style>