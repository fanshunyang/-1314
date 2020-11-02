import axios from 'axios'
// axios.defaults.timeout = 1000
/* 第一层if判断生产环境和开发环境 */
if (process.env.NODE_ENV === 'production') {
  /* 第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境 */
  if (process.env.VUE_APP_FLAG === 'pro') {
    // production 生产环境
    axios.defaults.baseURL = 'http://localhost:3000'
  } else {
    // test 测试环境
    axios.defaults.baseURL = 'http://localhost:3000'
  }
} else {
  // dev 开发环境
  axios.defaults.baseURL = '/api'
}
class HttpRequset {
  interceptors (instance) {
    instance.interceptors.request.use((config) => {
      // 处理请求拦截器的内容
    if (config.url!=='login') {
      let token = localStorage.getItem('token')
      config.headers['token'] = token;
    }
  
      // console.log('请求拦截', config)
      // config.data = {
      //   masage: '慧慧'
      // }
      return config
    })
    instance.interceptors.response.use((response) => {
      // 处理响应拦截器的内容
    
    //  console.log(response);
      const res = response.data
      const path = location.history
    
     if (res.code==='NOTOKEN03') {
      localStorage.removeItem('token')
      this.$message.error(msg);
    }
      if (res.code === '200') {
        return res
      } 

      return response
    }, (error) => {
      console.log(error)

      return { error: '网络出错' }
    })
  }

  request (options) {
    const instance = axios.create({
      // baseURL: 'http://localhost:3000/post'
      // headers: { 'X-Custom-Header': 'foobar' }
    })
    // console.log(instance);
    // options = Object.assign( options)
    this.interceptors(instance)
    
    return instance(options)
  }
}
const objaxios = new HttpRequset()

export default objaxios
