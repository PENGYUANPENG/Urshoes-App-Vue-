<template>
	<main>
	<header>
		<img @click="back" src="../../assets/image/back.png">
		<h1>我的消息</h1>
	</header>
	<div id="tab">
		<ul>
			<li @click="active1">私信</li>
			<li @click="active2">系统信息</li>
		</ul>
	<mt-tab-container v-model="active">
	  <mt-tab-container-item id="tab-container1">
	    <mt-cell title="周杰伦">hello!!!您好，我是周杰伦。</mt-cell>
	    <mt-cell title="Uzi">hello!!!您好，我是Uzi简自豪。</mt-cell>
	  </mt-tab-container-item>
	  <mt-tab-container-item id="tab-container2">
	    <mt-cell title="好消息:">恭喜您成为UrShoes的一员！！！</mt-cell>
	  </mt-tab-container-item>
	</mt-tab-container>
	</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				active:'tab-container1'
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			active1(){
				this.active="tab-container1";
			},
			active2(){
				this.active="tab-container2";
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
		background: rgb(250,250,250);
	}
	header{
		width: 100%;
		height: 40px;
		text-align: center;
		background-color: #fff;
	}
	header>h1{
		color: #000;
		font-family: "book antiqua";
		font-size:22px;
		font-weight: 600;
		line-height:40px;
		text-indent: -2em;
	}
	header>img{
		float: left;
		width: 24px;
		margin: 5px auto;
	}
	#tab{
		width:100%;
		height: 100%;
		margin: 0 auto;
	}
	#tab>ul{
		width:50%;
		height: 30px;
		margin: 10px auto;
		border-radius: 20px;
		border: 1px solid gray;
	}
	#tab>ul>li{
		width: 50%;
		height: 30px;
		float: left;
		text-align: center;
		font-size: 18px;
		line-height: 30px;
		font-family: "微软雅黑";
		cursor: pointer;
	}
	#tab>ul>li:nth-of-type(2){
		border-left: 1px solid gray;
		box-sizing: border-box;
	}
</style>

