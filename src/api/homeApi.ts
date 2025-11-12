import request from '@/utils/request';
import http from '@/utils/request';

export default {
    aa(){
      return {"a":1}
    },
    login(data) {
        return request({
            url: '/user/login',
            method: 'post',
            data: data // 请求体数据
        });
    },
    getTableData(params){
        return request({
            url:'/home/getTableData',
            method:"get",
            params
        })
    },
    getCountData(params){
        return request({
            url:"/home/getCountData",
            method:"get",
            data:params,
        })
    },
    getEchartsData(params){
        return request({
            url:"/home/getEchartsData",
            method:"get",
            data:params,
        })
    } ,
}
