<template>
  <div>
    <div class="column">
      <b-field label="Search Projects">
        <b-input v-model="searchTerm" />
      </b-field>

      <b-carousel-list
        v-model="test"
        :data="filteredProjects"
        :items-to-show="2"
        :indicator-background="true"
      >
        <template #item="project">
          <div class="card" :card-background-color="black">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="`${
                    project.images[0]
                      ? project.images[0]
                      : 'https://bulma.io/images/placeholders/1280x960.png'
                  }`"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <!-- <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure> -->
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ project.title }}</p>
                  <b-taglist>
                    <b-tag
                      type="is-info"
                      v-for="tag in project.tags"
                      :key="tag"
                      >{{ tag }}</b-tag
                    >
                  </b-taglist>
                  <p v-if="project.demo">
                    Demo:
                    <router-link :to="{ name: project.demo }">Demo</router-link>
                  </p>
                </div>
              </div>
              <div class="content">
                {{ project.description }}
              </div>
            </div>
          </div>
        </template>
      </b-carousel-list>
    </div>
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
      test: 0,
      projects: [],
      searchTerm: "",
    };
  },
  // computed functions will run every time a given variable changes
  computed: {
    filteredProjects: function () {
      // this will run on projects after we've applied our search
      // we use an arrow function here, but could write the filter function separately and call it inside filter()
      // only need one set of brackets on .filter() if only using one param, otherwise wrap params in soft brackets as well
      return this.projects.filter((project) => {
        return project.description
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
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
    searchProjects() {},
  },
};
</script>
