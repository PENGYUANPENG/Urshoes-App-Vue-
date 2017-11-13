<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>我的收藏</h1>
	</header>
	<ul>
		<li v-for="v in msg"><img :src=v.src alt="" /><p>{{v.title}}</p><div id="set"><img src="../../assets/image/jinru.png" alt="" /><img src="../../assets/image/likesin.png" alt="" /><img src="../../assets/image/zhuanfa.png" alt="" /></div></li>
	</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
			}
		},
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
		display: block;
		width: 100%;
		background: rgb(250,250,250);
	}
	header{
		display: block;
		width: 100%;
		height: 40px;
		text-align: center;
		border-bottom: 1px solid gray;
	}
	header>h1{
		color: #000;
		font-family: "book antiqua";
		font-size:24px;
		font-weight: 600;
		line-height:40px;
		text-indent: -2em;
	}
	header>img{
		float: left;
		width: 30px;
		margin: 5px auto;
	}
	ul{
		display: block;
		overflow: hidden;
		width: 100%;
	}
	li{
		display: block;
		width: 100%;
		height: 100px;
		margin: 10px auto;
		background-color: #fff;
	}
	li>p{
		padding: 10px auto;
	}
	li>#set{
		position: relative;
		width: 40%;
		float: left;
		padding: 2% 10%;
	}
	li>#set>img{
		margin: 5px 5px;
		width: 21%;
	}
	li>img:nth-of-type(1){
		width: 40%;
		height: 100px;
		float: left;
	}
	li>p{
		font-size:20px;
		color: #000;
		font-weight: 600;
		text-indent: 2em;
	}
</style>