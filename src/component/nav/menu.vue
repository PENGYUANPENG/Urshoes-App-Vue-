<template>
	<main>
		<header>
			<p>Ur shoes</p>
			<div id="login">
				<img src="../../assets/image/prison.png"/>
			</div>
			<div id="search">
				<img src="../../assets/image/search.png"/>
				<input type="text" name="" id="" value="" />
			</div>
		<nav>
			<ul>
				<li>
					<router-link :to="{name:'my',params:{my:1}}">
						<img src="../../assets/image/hot.png"/>
						<p id="hotp">热销</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:2}}">
						<img src="../../assets/image/basketball.png"/>
						<p>篮球鞋</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:3}}">
						<img src="../../assets/image/football.png"/>
						<p>足球鞋</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:4}}">
						<img src="../../assets/image/run.png"/>
						<p>跑步鞋</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:5}}">
						<img src="../../assets/image/relax.png"/>
						<p>休闲鞋</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:6}}">
						<img src="../../assets/image/bag.png"/>
						<p>背包</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:7}}">
						<img src="../../assets/image/clothes.png"/>
						<p>服饰</p>
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'my',params:{my:8}}">
						<img src="../../assets/image/other.png"/>
						<p>其它</p>
					</router-link>
				</li>
			</ul>
		</nav>
		</header>
		<hr />
		<content>
			<div id="conhead">
				<ul>
					<li>
						<router-link :to="{name:'youhui',params:{my:1}}">
						<img src="../../assets/image/sale.png"/>
						<h2>今日优惠</h2>
						<h4>小面包9.9元秒杀</h4>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'youhui',params:{my:2}}">
						<img src="../../assets/image/tuangou.png"/>
						<h2>限时团购</h2>
						<h4>AJ训练鞋好价</h4>
						</router-link>
					</li>
					<li>
						<router-link :to="{name:'youhui',params:{my:3}}">
						<img src="../../assets/image/haitao.png"/>
						<h2>一键海淘</h2>
						<h4>限时运费八五折</h4>
						</router-link>
					</li>
				</ul>
			</div>
			<hr />
			<div id="content">
				<h1>热门推荐</h1>
				<ul>
					<li v-for='v in msg'>
						<img :src="v.src"/>
						<h2>{{v.title}}</h2>
						<p>{{v.about}}</p>
					</li>
				</ul>
			</div>
		</content>
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
			
		},
		mounted(){
			this.$http.get('data/hot.json').then(function(res){
				this.msg=res.body.list
			})
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		padding-bottom: 70px;
	}
	nav,ul{
		margin-top: 5%;
		width: 100%;
	}
	nav>ul>li{
		text-align: center;
		float: left;
		width: 25%;
		margin: 5px auto;
	}
	nav img{
		width:40%;
	}
	#hotp{
		color: #ff6666;
		font-weight: 600;
	}
	nav p{
		margin-top: 5px;
		font-size: 16px;
		font-weight:500;
		color: lightgray;
	}
	header{
		display: block;
		width: 100%;
		height: 270px;
		border-bottom: 1px solid gray;
		background: url('../../assets/image/banner.jpg')no-repeat;
		background-size: cover;
		text-align: center;
		margin-bottom: 5px;
		border-bottom-left-radius: 10%;
		border-bottom-right-radius: 10%;
	}
	header>p{
		font-size:32px;
		font-weight: 900;
		font-family: "edwardian script itc";
		line-height:50px;
		color: gray;
	}
	#search{
		width: 80%;
		height: 32px;
		background-color: #fff;
		margin-left: 20px;
		margin-bottom: 10px;
		border-radius: 20px;
	}
	#search>img{
		height: 20px;
		float: left;
		margin-left: 10px;
		margin-top: 5px;
	}
	#search>input{
		float: left;
		width: 80%;
		height: 32px;
		font-size: 12px;
		outline: none;
		background-color:transparent;
		margin-left: 10px;
		border: none;
	}
	#login{
		width: 10%;
		float: right;
		margin-right: 10px;
	}
	#login img{
		width: 80%;
	}
	#conhead{
		width: 100%;
	}
	#conhead>ul{	
		width: 90%;
		height: 90px;
		margin: 5px auto;
	}
	#conhead>ul>li{
		float: left;
		width: 33%;
		background-color: rgb(252,252,252);
		text-align: center;
	}
	#conhead>ul>li img{
		width: 40%;
	}
/*	#img{
		width: 60%;
		height: 140px;
		border-radius: 50%;
		border: 1px solid gray;
		text-align: center;
		background: url('../../assets/image/sale.png')no-repeat;
		background-size: 100%;
		overflow: hidden;
		margin: 10px auto;
	}*/
	#conhead>ul>li h2{
		margin: 2px;
		font-size: 14px
	}
	#conhead>ul>li h4{
		font-weight: 500;
		font-size: 12px;
		color: gray;
	}
	#content{
		width: 100%;
	}
	#content>h1{
		margin-top: 5px;
		margin-bottom: 5px;
		margin-left:10px;
		font-size: 18px
	}
	#content>ul{
		width: 98%;
		margin: 0 auto;
		overflow: hidden;
	}
	#content>ul>li{
		float: left;
		width: 50%;
		text-align: center;	
		padding: 0 5px;
		box-sizing: border-box;
		height: 220px;
	}
	#content>ul>li>img{
		width: 100%;
		height: 120px;
	}
	#content>ul>li>h2{
		margin: 10px 0;
		font-size: 14px;
		font-weight: 600;
		color: darkslategray;
	}
	#content>ul>li>p{
		font-size: 12px;
		font-weight: 500;
		color: darkgray;
	}
	a:visited{
		color: #000;
	}
	a:link{
		color: #000;
	}
</style>