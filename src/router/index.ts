import {createWebHistory, createRouter} from 'vue-router'


import Main from '@/views/Layout.vue'
import HomeView from '@/views/Home.vue'
import UserView from '@/views/User.vue'
import Login from '@/views/Login.vue'
import Brand from '@/views/Brand.vue'
import GoodsAdd from '@/views/GoodsAdd.vue'
import Notfound from "@/views/Notfound.vue";

const routes = [
    {
        path: "/",
        component: Main,
        redirect: '/home', // 添加默认重定向
        meta:{},
        children: [
            {path: '/home',  meta:{title:"首页"}, component:  HomeView},
            {path: '/user',  meta:{title:"用户管理"},component: UserView},
            {path: '/mall',  meta:{title:"商品管理"}, component: null,
                children: [
                    {path: '/mall/brand',meta:{title:"品牌管理"},component: Brand},
                    {path: '/mall/add',  meta:{title:"商品列表"},component: GoodsAdd},
                ]
            },
            // 通配符路由 - 放在最后
            {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                meta:{title:"NotFound"},
                component: Notfound
            }
        ]
    },
    {
        path: "/login",
        meta:{title:"登录"},
        component: Login,
    },

]

// 创建组件映射
const componentMap: Record<string, () => Promise<any>> = {
    // 页面组件
    // 'home': () => import('@/views/Home.vue'),
    // 'mall': () => import('@/views/mall/index.vue'),
    '/user': () => import('@/views/User.vue'),
    '/brand': () => import('@/views/Brand.vue'),
    '/add': () => import('@/views/GoodsAdd.vue'),
    // 'page1': () => import('@/views/other/PageOne.vue'),
    // 'page2': () => import('@/views/other/PageTwo.vue')
}

interface RouteItem {
    path: string
    name: string
    meta: {
        title: string
    }
    component?: any
    children?: RouteItem[]
}

export function menuToRoutes(menuData: any[]): any[] {
    const routes: any[] = []

    menuData.forEach((menu: any) => {
        // = new RouteItem
        const route : RouteItem =  {
            path: menu.path,
            name: menu.name,
            meta: {
                title: menu.name
            }
        }

        if (menu.children && menu.children.length > 0) {
            // route.component = componentMap['BasicLayout']
            route.children = menuToRoutes(menu.children)
        } else {
            // 根据菜单信息找到对应的组件
            route.component = componentMap[menu.path]
        }

        routes.push(route)
    })

    return routes
}



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router; // 导出供其他地方使用
