<template>
	<main>
		<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>意见反馈</h1>
	</header>
	<div id="advice">
		<textarea name="" rows="" cols="" placeholder="亲，您遇到什么问题啦，或是有什么建议吗？可以发给我们，谢谢！！！"></textarea>
		<mt-button type="primary" size="normal" class='unnlo'>提交建议</mt-button></div>
	</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
			}}
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
		text-align: center;
	}
	header>h1{
		color: #000;
		font-family: "book antiqua";
		font-size:24px;
		font-weight: 600;
		line-height:50px;
		text-indent: -2em;
	}
	header>img{
		float: left;
		width: 30px;
		margin: 10px auto;
	}
	#advice{
		width: 90%;
		margin: 20px auto;
	}
	textarea{
		width: 100%;
		height:0px;
		margin: 0;
		font-size:14px;
		line-height: 20px;
		overflow: auto;
		padding-bottom: 180px;
	}
</style>