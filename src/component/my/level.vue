<template>
	<main>
		<header>
			<img @click="back" src="../../assets/image/back1.png">
			<h1>LEVEL</h1>
		</header>
		<img src="../../assets/image/level3.png" alt="" />
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
			this.$http.get('data/hot.json').then(function(res){
				this.msg=res.body.list
			})
		},
		destroyed(){
			var footer = document.getElementsByTagName('footer')[0];
			footer.style.display='block';
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		background:url(../../assets/image/mybg.jpg) no-repeat;
		background-size: cover;
	}
	header{
		display: block;
		width: 100%;
		text-align: center;
	}
	header>h1{
		color: #fff;
		font-family: "book antiqua";
		font-size:36px;
		font-weight: 600;
		line-height:60px;
		text-indent: -1em;
	}
	header>img:nth-of-type(1){
		float: left;
		width: 40px;
		margin: 10px auto;
	}
	main>img{
		width: 100%;
	}
</style>