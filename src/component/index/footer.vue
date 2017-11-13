<template>
	<footer>
		<main>
			<ul>	
				<li><router-link to='/menu'><img src="../../assets/image/home.png"/><p>主&nbsp;页</p></router-link></li>
				<li><router-link to='/circle'><img src="../../assets/image/sneaker.png"/><p>鞋&nbsp;圈</p></router-link></li>
				<li><router-link to='/find'><img src="../../assets/image/find.png" alt="" /><p>发&nbsp;现</p></router-link></li>
				<li><router-link to='/my'><img src="../../assets/image/my.png" alt="" /><p>我&nbsp;的</p></router-link></li>
			</ul>
		</main>
	</footer>
</template>

<script>
	export default{
		methods(){
			
		}
	}
</script>

<style type="text/css">
	body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
	body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
	h1, h2, h3, h4, h5, h6{ font-size:100%; }
	address, cite, dfn, em, var { font-style:normal; }
	code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
	small{ font-size:12px; }
	ul, ol { list-style:none; }
	a { text-decoration:none; }
	sup { vertical-align:text-top; }
	sub{ vertical-align:text-bottom; }
	legend { color:#000; }
	fieldset, img { border:0; }
	button, input, select, textarea { font-size:100%; }
	table { border-collapse:collapse; border-spacing:0; }
</style>

<style scoped>
	html,body,main{
		position: fixed;
		bottom: -1px;
		width: 100%;
		height: 55px;
	}
	ul{
		width: 100%;
		height: 100%;
		border-top: 1px solid gray;
		box-sizing: border-box;
		background-color: #fff;
	}
	ul>li{
		margin-top: 2px;
		text-align: center;
		float: left;
		width: 25%;
	}
	p{
		font-size: 12px;
		color: gray;
	}
	img{
		width: 30%;
	}
</style>