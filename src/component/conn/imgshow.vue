<template>
	<main>
		<header>
			<div id="back" @click="back"><img src="../../assets/image/back1.png"/></div>
			<div id="like" @click="like"><img :src=url alt=""  /></div>
		</header>
		<div id="img">
		<img :src=this.$route.params.src alt="" />
		<h1>{{this.$route.params.title}}</h1>
		<hr />
		<p>{{this.$route.params.con}}</p>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				'msg':0,
				"url":"src/assets/image/likes.png"
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			like(){
				if(this.msg==0){
				this.url="src/assets/image/likesin.png"
				this.msg=1
				}else{
					this.url="src/assets/image/likes.png"
					this.msg=0
				}
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
		width: 100%;
	}
	#img{
		width: 100%;
		text-align: center;
	}
	h1{
		color: gray;
		font-size: 28px;
		font-weight: 900;
		margin: 5px auto;
	}
	p{
		margin-top: 20px;
		color: #000;
		font-size: 18px;
		text-align: left;
		font-family: "arial narrow";
		text-indent:2em;
	}
	#img>img{
		width: 100%;
	}
	#back{
		position: absolute;
		background-color: rgba(0,0,0,0.1);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		left: 10px;
		top: 10px;
	}
	#back>img{
		width:40px;
	}
	#like{
		position: absolute;
		background-color:transparent;
		width: 40px;
		height: 40px;
		right: 10px;
		top: 10px;
	}
	#like>img{
		width:40px;
	}
</style>