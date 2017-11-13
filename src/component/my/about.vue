<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>UrShoes</h1>
	</header>
	<div id="about">
		<img src="../../assets/image/thelogo.png" alt="" />
		<p>UrShoes</p>
	<ul>
		<li><img src="../../assets/image/wechat.png" /></li>
		<li><img src="../../assets/image/weibo.png" /></li>
		<li><img src="../../assets/image/QQ.png" /></li>								
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
	}
	header{
		display: block;
		width: 100%;
		height: 60px;
		text-align: center;
	}
	header>h1{
		color: #000;
		font-family: "book antiqua";
		font-size:22px;
		font-weight: 600;
		line-height:60px;
		text-indent: -2em;
	}
	header>img{
		float: left;
		width: 30px;
		margin: 15px auto;
	}
	p{
		padding: 10px auto;
		color: #000;
		font-family: arial;
		font-size: 18px;
	}
	#about{
		width: 100%;
		color: gray;
		background-color: #fff;
		text-align: center;
	}
	#about>img{
		width: 25%;
		border: 1px solid gray;
		border-radius: 50%;
		margin-top: 150px;
	}
	ul{
		width: 60%;
		margin:20px auto;
		overflow: hidden;
	}
	li{
		width: 33.3%;
		float: left;
		padding: 0 5px;
		box-sizing: border-box;
	}
	li>img{
		width: 60%;
	}
</style>