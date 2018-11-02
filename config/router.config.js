export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // article
  {
    path: '/article',
    component: '../layouts/ArticleLayout',
    routes: [
      { path: '/article', redirect: '/article/index' },
      { path: '/article/index', name: 'article.all', component: './Article/index', },
      { path: '/article/ask', name: 'article.ask', component: './Article/index', },
      { path: '/article/share', name: 'article.share', component: './Article/index', },
      { path: '/article/discuss', name: 'article.discuss', component: './Article/index', },
      { path: '/article/suggest', name: 'article.suggest', component: './Article/index', },
      { path: '/article/notice', name: 'article.notice', component: './Article/index', },
      { path: '/article/news', name: 'article.news', component: './Article/index', },
      { path: '/article/job', name: 'article.job', component: './Article/index', },
    ],
  },
  {
    path: '/mall',
    component: '../layouts/MallLayout',
    routes: [
      { path: '/mall', redirect: '/mall/index', },
      { path: '/mall/index', name: 'mall.all', component: './Mall/Index/index', },
      { path: '/mall/feedback', name: 'mall.feedback', component: './Mall/Feedback/index', },
      { path: '/mall/maintain', name: 'mall.maintain', component: './Mall/Single/Maintain', },
      { path: '/mall/post/view', name: 'mall.post.add', component: './Mall/UserCenter/PostView', },
      { path: '/mall/post/list', name: 'mall.post.list', component: './Mall/UserCenter/PostList', },
      {
        path: '/mall/company',
        name: 'company',
        component: './Mall/Info/Info',
        routes: [
          {
            path: '/mall/company',
            redirect: '/mall/company/about',
          },
          {
            path: '/mall/company/about',
            component: './Mall/Info/About',
          },
          {
            path: '/mall/company/contact',
            component: './Mall/Info/Contact',
          },
          {
            path: '/mall/company/partner',
            component: './Mall/Info/Partner',
          },
          {
            path: '/mall/company/business',
            component: './Mall/Info/Business',
          },
          {
            path: '/mall/company/joinus',
            component: './Mall/Info/Joinus',
          },
          {
            path: '/mall/company/links',
            component: './Mall/Info/Links',
          },
        ],
      }, {
        path: '/mall/user',
        name: 'user',
        component: './Mall/UserCenter/BaseView',
        routes: [
          {
            path: '/mall/user',
            redirect: '/mall/user/basicinfo',
          },
          {
            path: '/mall/user/basicinfo',
            component: './Mall/UserCenter/BasicInfo',
          },
          {
            path: '/mall/user/address',
            component: './Mall/UserCenter/Address',
          },
          {
            path: '/mall/user/orderlist',
            component: './Mall/UserCenter/BasicInfo',
          },
          {
            path: '/mall/user/password',
            component: './Mall/UserCenter/PassWord',
          },
          {
            path: '/mall/user/safety',
            component: './Mall/UserCenter/Safety',
          },
          {
            path: '/mall/user/collect',
            component: './Mall/UserCenter/Collect',
          },
          {
            path: '/mall/user/exchange',
            component: './Mall/UserCenter/Exchange',
          },
        ]
      }
    ],
  },
  // clubAdmin
  {
    path: '/clubAdmin',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/clubAdmin', redirect: '/clubAdmin/index', },
      { path: '/clubAdmin/index', hideInMenu: true, name: 'clubAdmin.all', component: './ClubAdmin/index', },
      {
        path: '/clubAdmin/post',
        name: 'clubAdmin.post',
        icon: 'post',
        routes: [{
          path: '/clubAdmin/post/list',
          name: 'list',
          component: './ClubAdmin/index',
        },{
          path: '/clubAdmin/post/add',
          name: 'add',
          component: './Mall/UserCenter/PostView',
        }]
      },
      {
        path: '/clubAdmin/tag',
        name: 'clubAdmin.tag',
        icon: 'post',
        routes: [{
          path: '/clubAdmin/tag/list',
          name: 'list',
          component: './ClubAdmin/index',
        }]
      },
    ]
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                name: 'stepform',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
