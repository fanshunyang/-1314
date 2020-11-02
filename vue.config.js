module.exports = {
    
    // baseUrl: './',
    // assetsDir: 'static',
    // productionSourceMap: false,
    devServer: {
        open:true,
        proxy: {
            '/api':{
                target:'http://192.168.50.213:8005',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }   
            }
        }
    },
    // css: {
    //     loaderOptions: {
    //       sass: {
    //         // 根据自己样式文件的位置调整
    //         data: `@import "@/styles/global.scss";`
    //       }
    //     }
    //   }
}