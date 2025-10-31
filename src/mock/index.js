import Mock from "mockjs";


// 模拟用户数
Mock.mock('/user/login', 'post', {
    code: 200,
    message: '登录成功',
    data: {
        token: Mock.Random.guid(),
        userInfo: {
            id: Mock.Random.id(),
            username: 'admin',
            avatar: Mock.Random.image('100x100')
        }
    }
})

// 模拟获取用户信息
Mock.mock('/user/info', 'get', {
    code: 200,
    data: {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
        roles: ['admin']
    }
})

export default Mock
