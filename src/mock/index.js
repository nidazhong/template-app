import Mock from "mockjs";
import {userMenus} from "@/data/FakeData";



// 模拟用户数
Mock.mock('/user/login', 'post', function (options){
    let body = JSON.parse(options.body)
    let username = body.username


    const user = userMenus.find(user => user.name === username)

    if (user) {
        return {code: 200, data: {token: Mock.Random.guid(),
            message: '登录成功',
            userInfo: {id:"1", username: user.username, menu:user.menu}}}
    } else {
        return {code: 500, data: {message: '登录失败'}}}

    // if (username === 'admin') {
    //     return {code: 200, data: {token: Mock.Random.guid(),
    //             message: '登录成功',
    //             userInfo: {id:"1", username: 'admin', menu:fakeData.value.data}}}
    // } else {
    //     return  {code: 200, data: {
    //             token: Mock.Random.guid(),
    //             message: '登录成功',
    //             userInfo: {
    //                 id: Mock.Random.id(),
    //                 username: 'Ryan',
    //                 avatar: Mock.Random.image('100x100'),
    //                 menu:[{
    //                     id:"1",
    //                     path: '/home',
    //                     name: '首页',
    //                     icon: 'HomeFilled',
    //                 },
    //                     {
    //                         id:"2",
    //                         path: '/mall',
    //                         name: '商品管理',
    //                         icon: 'GoodsFilled',
    //                         children: [
    //                             {
    //                                 id:"22",
    //                                 path: '/mall/brand',
    //                                 name: '品牌管理',
    //                                 icon: 'ShoppingTrolley',
    //                             },
    //                             {
    //                                 id:"23",
    //                                 path: '/mall/add',
    //                                 name: '添加商品',
    //                                 icon: 'DocumentAdd',
    //                             }
    //                         ]
    //
    //                     },]
    //             }}
    //     }
    // }

}

    )

Mock.mock('/user/login1', 'get', function(options) {
    console.log('请求参数:', options)
    console.log(options)
    return 1
})

// 模拟获取用户信息 function写法
Mock.mock('/user/info', 'get', function(options) {
    console.log('请求参数:', options)
    return {
        code: 200,
        data: {
            id: 1,
            username: 'admin',
            email: 'admin@example.com',
            roles: ['admin'],
            timestamp: new Date().getTime()
        }
    }
})


// 拦截登出
Mock.mock('/user/logout', 'logout', {
    code: 200,
    data: {
        message: '已退出登录'
    }
})

export default Mock
