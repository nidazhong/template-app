import request from '@/utils/request'; // 导入封装好的 axios 实例

export default {
    login(data) {
        return request({
            url: '/user/login',
            method: 'post',
            data: data // 请求体数据
        });
    },
    getUserInfo(userId) {
        return request({
            url: `/user/${userId}`,
            method: 'get'
        })
    },
    logout(data) {
        return request({
            url: '/user/logout',
            method: 'post',
            data: data // 请求体数据
        });
    }
}

