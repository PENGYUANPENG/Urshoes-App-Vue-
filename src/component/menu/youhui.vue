<template>
	<main>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">今日优惠</mt-tab-item>
		  <mt-tab-item id="2">限时团购</mt-tab-item>
		  <mt-tab-item id="3">一键海淘</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <mt-cell v-for='v in data'>
		    <img :src=v.src alt="" />
		    <h2>{{v.title}}</h2>
		    <p>{{v.price | toDou}}</p>
		   	<p>{{v.oprice | toDou}}</p>
		    </mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
		  </mt-tab-container-item>
		</mt-tab-container>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				selected:'1',
				data:''
			}
		},
		filters:{
					// 'add':function(n){
					// 	return '￥'+n;
					// }
					add(n){
						return '￥'+n;
					},
					toDou(n){
						return n<10?'￥0'+n:'￥'+n;
					}
		},
		mounted(){
			this.$http.get('data/tuangou.json').then(function(res){
				this.data=res.body.list
				this.selected=this.$route.params.my.toString();
			})
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
		padding-bottom: 100px;
	}
	.mint-cell-wrapper p:nth-of-type(1){
		color: red;
	}
	.mint-cell-wrapper p:nth-of-type(2){
		color: gray;
		text-decoration:line-through
	}
	.mint-cell-wrapper img{
		width: 30%;
		padding: 5px;
	}
	.mint-cell-wrapper{
		width: 100%;
		height: 100px;
		overflow: hidden;
	}
</style>