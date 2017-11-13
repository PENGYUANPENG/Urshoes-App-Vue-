<template>
	<main>
		<div id="back" @click="back"><img src="../../assets/image/back1.png"/></div>
		<header>我的晒物</header>
		<div id="info">
			<div id="myimg">
			</div>
		</div>
		<div id="content">
			<h1>发布您的新炫物</h1>
			<textarea name="" rows="" cols="" v-model="msg"></textarea>
			<ul>
				<li><img src="../../assets/image/wbimg.png" alt="" /></li>
				<li><img src="../../assets/image/wbvideo.png" alt="" /></li>
				<li><img src="../../assets/image/wbmusic.png" alt="" /></li>
				<li><mt-button type="primary" @click="add">发送</mt-button></li>
			</ul>
			<hr />
		</div>
		<div id="shower">
			<ul>
			<li v-for="(v,i) in json.list"><img :src=v.url alt="" /><br /><br />{{v.con}} <br /><br /><span @click="del(i)">删除</span></li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'',
				json:{
					list:[
					{con:"我好喜欢这款adidas鞋子，谁知道叫什么名字？",
					url:'src/assets/connect/6.jpg'},
					{con:"这对AIR JORDAN酷毙了！！！",
					url:'src/assets/connect/12.jpg'},
					{con:"这对NIKE帅帅帅！！！",
					url:'src/assets/connect/11.jpg'}
					]
				}
			}
		},
		methods:{
				add(){
					this.json.list.push({con:this.msg});
					this.msg=""
				},
				del(n){
					this.json.list.splice(n,1)
				},
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
		/*position: fixed;*/
		width: 100%;
		background: url(../../assets/image/mybg.jpg);
		background-size: cover;
		padding-bottom: 100px;
	}
	header{
		display: block;
		width: 100%;
		height: 50px;
		background: transparent;
		text-align: center;
		font-family: "book antiqua";
		font-size: 24px;
		font-weight: 900;
		line-height:50px;
		color: #000;
	}
	#info{
		display: block;
		width: 100%;
		height: 80px;
		background: transparent;
	}
	#myimg{
		display: block;
		margin: 0px auto;
		width: 80px;
		height: 80px;
		background: url(../../assets/image/camera.png) no-repeat;
		background-size:cover;	
	}
	#content{
		width: 100%;
		background: transparent;
		color: gray;
		text-align: center;
		font-size: 24px;
	}
	textarea{
		width: 90%;
		height:120px;
		margin: 10px auto;
		font-size: 18px;
		background-color: transparent;
	}
	#content>ul{
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
	}
	#content>ul>li{
		margin: 10px 0;
		width: 25%;
		float: left;
		text-align: center;
		font-size: 24px;
		color: gray;
	}
	#content>ul>li>img{
		width: 50%;
	}
	#content a:visited{
		color:gray;
	}
	#shower{
		width: 90%;
		margin: 0 auto;
		color: #fff;
		font-size: 16px;
		text-align: center;
	}
	#shower>ul>li{
		width: 100%;
		overflow: hidden;
		margin: 10px auto;
	}
	#shower>ul>li>span{
		color: deeppink;
		float: right;
	}
	#shower>ul>li>img{
		width:80%;
	}
	#back{
		position: absolute;
		border-radius: 50%;
		width: 30px;
		height: 30px;
		left: 5px;
		top: 5px;
	}
	#back>img{
		margin: 5px auto;
		width:30px;
	}
</style>