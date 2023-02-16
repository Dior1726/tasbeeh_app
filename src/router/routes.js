
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        name: 'Home',
        component: () => import('pages/Index.vue'),
        meta: {
          name: 'Время намаза'
        }
      },
      {
        path: 'dua',
        name: 'Dua',
        component: () => import('pages/Dua.vue'),
        meta: {
          name: 'Дуа'
        }
      },
      {
        path: 'zikr',
        name: 'Zikr',
        component: () => import('pages/Zikr.vue'),
        meta: {
          name: 'Зикры'
        }
      },
      {
        path: 'zikr/:id',
        name: 'zikr_detail',
        component: () => import('src/pages/ZikrDetail.vue'),
      }, 
      {
        path: 'quran',
        name: 'Quran',
        component: () => import('src/pages/Book.vue'),
        meta: {
          name: 'Коран'
        },
      },
      {
        path: 'quran/:id',
        name: 'quran_detail',
        component: () => import('src/pages/BookDetail.vue'),
      }, 
      {
        path: 'about',
        name: 'about',
        component: () => import('src/pages/About.vue'),
        meta: {
          name: 'О приложении'
        },
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    redirect: '/'
  }
]

export default routes
