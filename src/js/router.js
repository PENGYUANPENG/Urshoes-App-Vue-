import VueRouter from 'vue-router'


import menu from '../component/nav/menu.vue'
import circle from '../component/nav/circle.vue'
import find from '../component/nav/find.vue'
import my from '../component/nav/my.vue'
import chinese from '../component/conn/chinesefood.vue'
import imgshow from '../component/conn/imgshow.vue'
import set from '../component/my/shezhi.vue'
import advice from '../component/my/advice.vue'
import xieyi from '../component/my/xieyi.vue'
import about from '../component/my/about.vue'
import safe from '../component/my/safe.vue'
import news from '../component/my/news.vue'
import body from '../component/my/body.vue'
import myshow from '../component/my/myshow.vue'
import level from '../component/my/level.vue'
import like from '../component/my/like.vue'
import login from '../component/my/login.vue'
import zhuce from '../component/my/zhuce.vue'
import youhui from '../component/menu/youhui.vue'
import main from '../component/menu/main.vue'

export default new VueRouter({
	routes:[
	{path:'/menu',component:menu},
	{path:'/circle',component:circle},
	{path:'/find',component:find},
	{path:'/my',component:my},
	{path:'/cf',component:chinese},
	{path:'/imgshow',component:imgshow,name:'show'},
	{path:'/set',component:set},
	{path:'/advice',component:advice},
	{path:'/xieyi',component:xieyi},
	{path:'/about',component:about},
	{path:'/safe',component:safe},
	{path:'/news',component:news},
	{path:'/body',component:body},
	{path:'/myshow',component:myshow},
	{path:'/level',component:level},
	{path:'/like',component:like},
	{path:'/zhuce',component:zhuce},
	{path:'/login',component:login},
	{path:'/youhui',component:youhui,name:'youhui'},
	{path:'/main',component:main,name:'my'},
	{path:'*',redirect:'/menu'}
	]
})
