import { createRouter, createWebHistory } from "vue-router";
import LessonsRouter from "./module/lessons";
import Layout from "../views/layout";

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index")
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/documentation",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/documentation/index"),
        name: "Documentation",
        meta: { title: "Documentation", icon: "documentation", affix: true }
      }
    ]
  },
  {
    path: "/lessons",
    component: Layout,
    redirect: "/lessons/nextTick",
    name: "Lessons",
    meta: {
      title: "Lessons",
      icon: "component"
    },
    children: [
      {
        path: "next-tick",
        component: () => import("@/views/lessons/next-tick"),
        name: "NextTick",
        meta: {
          title: "NextTick"
        }
      },
      {
        path: "next-tick1",
        component: () => import("@/views/lessons/next-tick"),
        name: "NextTick1",
        meta: {
          title: "NextTick1"
        }
      }
    ]
  },
  {
    path: "/echarts",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/echarts/index"),
        name: "Echarts",
        meta: { title: "Echarts", icon: "chart" }
      }
    ]
  },
  {
    path: "/todo",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/todo/index"),
        name: "Todo",
        meta: { title: "Todo", icon: "excel" }
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    alwaysShow: true, // will always show the root menu
    name: "Permission",
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"] // you can set roles in root nav
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page"),
        name: "PagePermission",
        meta: {
          title: "Page Permission",
          roles: ["admin"] // or you can only set roles in sub nav
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "DirectivePermission",
        meta: {
          title: "Directive Permission"
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: "role",
        component: () => import("@/views/permission/role"),
        name: "RolePermission",
        meta: {
          title: "Role Permission",
          roles: ["admin"]
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: [...LessonsRouter, ...constantRoutes, ...asyncRoutes]
});

export default router;
