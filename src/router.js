import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/projects/AllProjects.vue";
import VueDo from "@/pages/projects/vue-do/App.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/demo/vue-do",
      name: "vue-do",
      component: VueDo,
    },
  ],
});
