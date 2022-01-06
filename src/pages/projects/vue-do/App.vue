<template>
  <div class="top">
    <b-container>
      <b-row>
        <b-col>
          <TodoList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TodoList from "@/pages/projects/vue-do/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
.container {
  margin-top: 30px;
}
body,
html {
  background-color: #0a1224 !important;
}
.top {
  width: 100%;
  margin-top: 10rem;
}
</style>
