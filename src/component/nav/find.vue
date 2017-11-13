<template>
	<main>
		<header>
			<h1>发 现</h1>
		</header>
		<content>
			<ul>
				<li v-for="v in img"><router-link :to="{name:'show',params:{src:v.src,title:v.title,con:v.con}}"><img v-lazy="v.src" alt="" /></router-link></li>
			</ul>
		</content>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				img:''
			}
		},
		methods:{
		},
		mounted(){
			this.$http.get('data/img.json').then(function(res){
				this.img=res.body.list
			})
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		padding-bottom:100px;
	}
	header{
		width: 100%;
		height: 40px;
		background:url(../../assets/image/mybg.jpg) no-repeat;
		background-size: cover;
		color: #fff;
		font-size:22px;
		line-height: 40px;
		font-family: "微软雅黑";
		text-align: center;
	}
	ul{
		width: 100%;
		column-count: 2;
	}
	li{
		padding: 5px;
		box-sizing: border-box;
		border: 1px solid gray;
		border-radius: 10px;
		margin: 10px 5px;
	}
	img{
		width: 100%;
		cursor: pointer;
	}
</style>