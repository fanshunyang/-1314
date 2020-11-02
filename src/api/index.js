import api from '../utils/request';

export const fetchData = params => {
    //登录请求
    return api.request({
        url: '/login/ajaxLogin',
        method: 'post',
        params: params
    });
};

export const quit = (headers,params) =>{
    //退出登录请求
    return api.request({
        url: '/login/loginOut',
        method: 'post',
        headers:headers,
        params: params,
    })
}

export const add = ( headers,params) =>{
    //管理员添加请求
    return api.request({
        url: '/admin/addAdmin',
        method: 'post',
        headers:headers,
        params: params
    })
}


export const getlist = ( headers,params) =>{
    //管理员列表请求
    return api.request({
        url: '/admin/adminList',
        method: 'post',
        headers:headers,
        params: params
    })
}