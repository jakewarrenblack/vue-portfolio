<template>
  <b-list-group-item>
    <span v-if="todo.done" class="done">{{ todo.text }}</span>
    <span v-else>{{ todo.text }}</span>
    <span v-if="todo.done" class="float-end">&#128077;</span>
    <b-button
      v-else
      class="float-right mx-2"
      pill
      variant="outline-success"
      @click="completeTodo()"
      >&#10003;</b-button
    >
    <b-button
      class="float-right mx-2"
      pill
      variant="outline-danger"
      @click="deleteTodo()"
      >&#10060;</b-button
    >
  </b-list-group-item>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    completeTodo() {
      // emitting a custom event - it says 'something happened'
      // @click and @keyUp are both also events
      // so we an emit a todo-completed event, and pass the todo object which was completed
      // 'passing a payload'
      this.$emit("todo-completed", this.todo);
    },
    deleteTodo() {
      this.$emit("todo-deleted", this.todo);
    },
  },
};
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
