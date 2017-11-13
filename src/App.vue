<template>
  	<main>
  		<router-view></router-view>
  		<v-footer></v-footer>
  	</main>
</template>

<script>
	import VFooter from './component/index/footer.vue'
	
export default {
  components:{
  	'v-footer':VFooter
  }
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
		text-decoration: none;
		list-style: none;
	}
</style>
