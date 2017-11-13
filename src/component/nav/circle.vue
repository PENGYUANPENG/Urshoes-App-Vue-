<template>
	<main>
		<header>
			<h1>鞋 圈</h1>
		</header>
		<div id="banner">
			<mt-swipe :auto="4000"  :show-indicators="false">
			  <mt-swipe-item><img src="../../assets/banner/banner1.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/banner/banner2.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/banner/banner3.png"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/banner/banner4.png"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<content>
			<div id="now">
				<div class="title">当季尖货</div>
				<ul>
					<li>
						<img src="../../assets/connect/1.jpg"/>
						<p>新品乔丹正代</p>
					</li>
					<li>
						<img src="../../assets/connect/2.jpg"/>
						<p>nike自动系鞋带</p>
					</li>
					<li>
						<img src="../../assets/connect/3.jpg"/>
						<p>AIR JORDAN I</p>
					</li>
				</ul>
			</div>
			<div id="boy">
				<div class="title">男生/BOYS</div>
				<ul>
					<li>
						<img src="../../assets/connect/4-1.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/4-2.jpg"/>						
					</li>
					<li>
						<img src="../../assets/connect/5-1.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/5-2.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/7.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/6.jpg"/>
					</li>
				</ul>
			</div>
			<div id="girl">
				<div class="title">女生/GIRLS</div>
				<ul>
					<li>
						<img src="../../assets/connect/11.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/12.jpg"/>						
					</li>
					<li>
						<img src="../../assets/connect/9-1.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/9-2.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/10-1.jpg"/>
					</li>
					<li>
						<img src="../../assets/connect/10-2.jpg"/>
					</li>
				</ul>
			</div>
			<div id="brand">
				<div class="title">品牌/BRAND</div>
				<ul>
					<li>
						<img src="../../assets/brand/1.png"/>
					</li>
					<li>
						<img src="../../assets/brand/4.png"/>
						<img src="../../assets/brand/10.png"/>
					</li>
					<li>
						<img src="../../assets/brand/12.png">
						<img src="../../assets/brand/11.png">
					</li>
					<li>
						<img src="../../assets/brand/2.png"/>
					</li>
					<li>
						<img src="../../assets/brand/6.png"/>
						<img src="../../assets/brand/8.png"/>
					</li>
					<li>
						<img src="../../assets/brand/3.png">
					</li>
					<li>
						<img src="../../assets/brand/14.png">
						<img src="../../assets/brand/9.png">
					</li>
					<li>
						<img src="../../assets/brand/13.png"/>
						<img src="../../assets/brand/15.png">
					</li>
				</ul>
			</div>
		</content>
	</main>
</template>

<script>
</script>

<style scoped="scoped">
	main{
		width: 100%;
		padding-bottom:1300px;
	}
	#banner{
		display: block;
		width: 100%;
		height: 141px;
		margin-bottom: 10px;
	}
	#banner img{
		width: 100%;
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
	#now{
		display: block;
		width: 100%;
		text-align: center;
	}
	.title{
		width: 120px;
		height: 30px;
		border: 1px solid gray;
		color: #000;
		font-size: 18px;
		line-height: 30px;
		margin: 0 auto;
	}
	#now>ul{
		width: 95%;
		margin:0 auto;
		column-count: 3;
	}
	#now>ul>li{
		float: left;
		margin:20px 0px;
	}
	#now img{
		width: 100%;
	}
	#now p{
		display: block;
		width: 100%;
		height: 30px;
		font-size: 12px;
		font-family: "微软雅黑";
		line-height: 30px;
		background-color: rgba(0,0,0,0.1);
		border-radius: 20px;
		margin: 10px auto;
	}
	#boy{
		display: block;
		width: 100%;
		text-align: center;
	}
	#boy>ul{
		width: 95%;
		margin:20px auto;
		column-count: 3;
	}
	#boy>ul>li{
		float: left;
	}
	#boy img{
		width: 100%;
		height: 93px;
	}
	#girl{
		display: block;
		width: 100%;
		text-align: center;
	}
	#girl>ul{
		width: 95%;
		margin:20px auto;
		column-count: 3;
	}
	#girl>ul>li{
		float: left;
	}
	#girl img{
		width: 100%;
		height: 93px;
	}
	#brand{
		display: block;
		width: 100%;
		text-align: center;
	}
	#brand>ul{
		width: 95%;
		margin:10px auto;
	}
	#brand>ul>li{
		float: left;
		width: 100%;
		margin: 2px 2px;
	}
	#brand>ul>li>img{
		float: left;
		width: 50%;
		padding: 5px;
		height: 140px;
		box-sizing: border-box;
	}
	#brand>ul>li:nth-of-type(1)>img,#brand>ul>li:nth-of-type(4)>img,#brand>ul>li:nth-of-type(6)>img{
		width: 100%;
		height: 150px;
		float: left;
	}
</style>