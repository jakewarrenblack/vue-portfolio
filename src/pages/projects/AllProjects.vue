<template>
  <div>
    <h1>All projects</h1>
    <hr />
    <b-card v-for="project in projects" :key="project.id">
      <b-card-title>Title: {{ project.title }}</b-card-title
      ><br />
      <b-card-img :src="`${project.images[0]}`" /><br />
      <b-card-body>Description: {{ project.description }}</b-card-body
      ><br />
      Demo:
      <button>
        <router-link :to="{ name: project.demo }">Demo</router-link>
      </button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "AllProjects",
  components: {},
  mounted() {
    this.getAllProjects();
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      fetch("data/projects.json")
        // first .then() converts json to javascript object
        // we specify that the file is json with 'res.json()'
        .then((res) => res.json())
        // now it returns its value to the next '.then()'
        .then((data) => {
          console.log(data);
          this.projects = data;
        });
    },
  },
};
</script>
