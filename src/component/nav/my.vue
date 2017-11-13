<template>
	<main>
		<header>Sneaker</header>
		<div id="info">
			<div id="myimg">
			</div>
			<div id="lgre">
				<router-link to="./login"><p>登录</p></router-link>
				<router-link to="./my"><p>/</p></router-link>
				<router-link to="./zhuce"><p>注册</p></router-link>
			</div>
		</div>
		<div id="content">
			<ul>
				<li>
					<router-link to="./like">
					<img src="../../assets/image/like.png" alt="" />
					<p>物品收藏</p>
					</router-link>
				</li>
				<li>
					<router-link to="./level">
					<img src="../../assets/image/alllike.png" alt="" />
					<p>荣誉称号</p>
					</router-link>
				</li>
				<li>
					<router-link to='./myshow'>
					<img src="../../assets/image/camera.png" alt="" />
					<p>我的晒物</p>
					</router-link>
				</li>
				<li>
					<router-link to='./advice'>
					<img src="../../assets/image/view.png" alt="" />
					<p>意见反馈</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div id="main">
			<ul>
				<li><router-link to='./body'><img src="../../assets/image/body.png" alt="" /><img src="../../assets/image/go.png"/><p>身体测量</p></router-link></li>
				<li><img src="../../assets/image/luntan.png"/><img src="../../assets/image/go.png"/><p>Sneaker论坛(暂未开放)</p></li>
				<li><router-link to='./news'><img src="../../assets/image/news.png"/><img src="../../assets/image/go.png"/><p>我的消息</p></router-link></li>
				<li><router-link to='./set'><img src="../../assets/image/shezhi.png"/><img src="../../assets/image/go.png"/><p>设置</p></router-link></li>
			</ul>
		</div>
	</main>
</template>

<script>
</script>


<style scoped="scoped">
	main{
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		background: url(../../assets/image/mybg.jpg) no-repeat;
		background-size: 100%;
	}
	header{
		display: block;
		width: 100%;
		height: 40px;
		background: transparent;
		text-align: center;
		font-family: "book antiqua";
		font-size: 22px;
		font-weight: 900;
		line-height:40px;
		color: #fff;
	}
	#info{
		display: block;
		width: 100%;
		height: 100px;
		background: transparent;
	}
	#myimg{
		display: block;
		margin: 5px auto;
		width: 70px;
		height:70px;
		border: 1px solid darkgray;
		box-sizing: border-box;
		border-radius: 50%;
		background: url(../../assets/image/thelogo.jpg) no-repeat;
		background-size:cover;	
	}
	#info>#lgre{
		width: 120px;
		height: 30px;
		margin: 0 auto;
		text-align: center;
		background: transparent;
	}
	#info>#lgre a{
		float: left;
		width: 40px;
		color: #000;
		font-size:14px;
		font-weight: 600;
		font-family: "微软雅黑";
	}
	#content{
		width: 100%;
		height: 100px;
		background: transparent;
		margin-top: 10px;
	}
	#content>ul{
		width: 80%;
		margin: 0 10%;
	}
	#content>ul>li{
		margin: 10px auto;
		width: 25%;
		float: left;
		text-align: center;
		font-size: 12px;
		color: gray;
	}
	a{
		color:gray;
	}
	#content img{
		width: 70%;
	}
	#content a:link{
		color:gray;
	}
	#main{
		width: 100%;
		overflow: hidden;
		background-color: rgb(250,250,250);
	}
	#main>ul{
		width:100%;
		padding-top: 10px;
	}
	#main>ul>li{
		display: block;
		width: 100%;
		height: 20px;	
		margin: 0 auto;		
		border-bottom: 1px solid gray;
		background: #fff;
		padding: 10px 0;
		margin-bottom:5px;
	}
	#main>ul>li p{
		line-height: 20px;
		font-size: 17px;
		font-family:arial;
		font-weight:400;
		color:#000;
		text-indent: 1em;
	}
	#main>ul>li img{
		height: 100%;
	}
	#main>ul>li img:nth-of-type(1){
		margin: 2px 5px;
		float: left;
	}
	#main>ul>li img:nth-of-type(2){
		height: 80%;
		margin:2px auto;
		float: right;
	}
	#main>ul>li:nth-of-type(2)>p{
		color:lightgray;
	}
</style>