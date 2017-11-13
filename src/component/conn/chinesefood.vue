<template>
	<main>
		<header>
			<a @click='push'><</a>
			详情页
		</header>
		<ul v-for='v in msg'>
			<li>
				<h1>{{v.title}}</h1>
				<img v-bind:src="v.albums" alt="" />
			</li>
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
			push(){
				this.$router.replace({path:'/menu'});
			}
		},
		mounted(){
				this.$http.get('data/chinese.json').then(function(res){
				this.msg=res.body.result.data;
				console.log(res)
			})
		}
	}
</script>

<style scoped="scoped">
	a{
		float: left;
		background-color: #fff;
		font-size: 55px;
	}
	header{
		display: block;
		font-size: 46px;
		text-align: center;
		font-weight: 900;
		font-family:"微软雅黑";
		line-height: 92px;
		border-bottom: 1px solid gray;
	}
	ul,li,img{
		width: 100%;
	}
	h1{
		font-size: 46px;
		text-align: center;
		font-weight: 900;
		font-family:"微软雅黑";
		line-height: 92px;
	}
	li{
		margin-top: 20px;
		border-bottom: 1px solid gray;
	}
	main{
		padding-bottom: 100px;
	}
</style>