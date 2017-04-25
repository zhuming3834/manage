import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   		{
            path: '/',
            redirect: '/login'
       },
	    {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
			        path: '/hello',
			        component: resolve => require(['../components/page/Hello.vue'], resolve)
			    },
			    {
			        path: '/table1',
			        component: resolve => require(['../components/page/Table1.vue'], resolve)
			    },
			    {
			        path: '/table2',
			        component: resolve => require(['../components/page/Table2.vue'], resolve)
			    },
			    {
			        path: '/table3',
			        component: resolve => require(['../components/page/Table3.vue'], resolve)
			    },
			     {
			        path: '/carousel',
			        component: resolve => require(['../components/page/Carousel.vue'], resolve)
			    },
			     {
			        path: '/radio',
			        component: resolve => require(['../components/page/Radio.vue'], resolve)
			    },
			     {
			        path: '/checkbox',
			        component: resolve => require(['../components/page/Checkbox.vue'], resolve)
			    },
			     {
			        path: '/input',
			        component: resolve => require(['../components/page/Input.vue'], resolve)
			    },
			    {
			        path: '/select',
			        component: resolve => require(['../components/page/Select.vue'], resolve)
			    },
			     {
			        path: '/echarts',
			        component: resolve => require(['../components/page/ECharts.vue'], resolve)
			    },
			    {
			        path: '/qrcode',
			        component: resolve => require(['../components/page/Qrcode.vue'], resolve)
			    },
            ]
        },
        {
            path: '/login', // 用户管理
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
  ]
})
