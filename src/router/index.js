import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

 const router =  new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                // {
                //     path: '/dashboard',
                //     component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                //     meta: { title: '控制面板' }
                // },
                {
                    path: '/contor',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Contor.vue'),
                    meta: { title: '控制面板' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    //管理员列表组件
                    path: '/list',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/List.vue'),
                    meta: { title: '管理员列表' }
                },
                {
                    //管理员添加组件
                    path: '/administrator',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Administrator.vue'),
                    meta: { title: '管理员添加' }
                },
                {
                    //角色列表组件
                    path: '/role',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Role.vue'),
                    meta: { title: '角色列表' }
                },
                {
                    //角色添加组件
                    path: '/terms',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Terms.vue'),
                    meta: { title: '角色添加' }
                },
                {
                    //权限列表组件
                    path: '/permisson',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Permisson.vue'),
                    meta: { title: '权限列表' }
                },
                {
                    //权限添加组件
                    path: '/authority',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Athority.vue'),
                    meta: { title: '权限添加' }
                },
                {
                    //活动列表组件
                    path: '/activitylist',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Activitylist.vue'),
                    meta: { title: '活动列表' }
                },
                {
                    //创建活动组件
                    path: '/activities',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/Activities.vue'),
                    meta: { title: '创建活动' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: '管理员添加' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
//路由前置导航守卫
// router.beforeEach(()=>{
    
// })
export default router