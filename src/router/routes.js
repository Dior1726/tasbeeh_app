const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/Index.vue"),
        meta: {
          name: "Главная страница",
        },
      },
      {
        path: "dua",
        name: "Dua",
        component: () => import("pages/Dua.vue"),
        meta: {
          name: "Дуа",
        },
      },
      {
        path: "zikr",
        name: "Zikr",
        component: () => import("pages/Zikr.vue"),
        meta: {
          name: "Зикры",
        },
      },
      {
        path: "zikr/:id",
        name: "Zikr_detail",
        component: () => import("src/pages/ZikrDetail.vue"),
      },
      {
        path: "quran",
        name: "Quran",
        component: () => import("src/pages/Book.vue"),
        meta: {
          name: "Коран",
        },
      },
      {
        path: "quran/:id",
        name: "Quran_detail",
        component: () => import("src/pages/BookDetail.vue"),
      },
      {
        path: "hadeeths",
        name: "Hadeeths",
        component: () => import("src/pages/Hadeeths.vue"),
        meta: {
          name: "Хадисы",
        },
      },
      {
        path: "hadeeths/list-:id",
        name: "HadeethsCategory",
        component: () => import("src/pages/HadeethsList.vue"),
        meta: {
          name: "",
        },
      },
      {
        path: "hadeeths/list-:id/one-:itemId",
        name: "HadeethsDetail",
        component: () => import("src/pages/HadeethListDetail.vue"),
        meta: {
          name: "",
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("src/pages/About.vue"),
        meta: {
          name: "О приложении",
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
