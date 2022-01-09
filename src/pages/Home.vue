<template>
  <body id="body">
    <div id="curtain" class="curtain">
      <div class="close-contain">
        <button id="close" class="close">X</button>
      </div>
      <div class="form-contain">
        <div class="head-contain">
          <h1 class="form-head">Get in touch</h1>
        </div>
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="contact"
          method="POST"
        >
          <input type="text" name="bot-field" style="display: none" />
          <input
            name="Name"
            placeholder="Your name"
            type="text"
            class="contact-input"
            required
          />
          <input
            name="Email"
            placeholder="you@email.com"
            type="email"
            class="contact-input"
            required
          />
          <textarea
            name="Message"
            placeholder="Your message"
            class="contact-input"
          ></textarea>
          <button type="submit" id="submit-btn" class="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="my_container">
      <div class="landing">
        <div class="landing-background">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="landing-foreground">
          <h1 class="my-name">Jake Black</h1>
          <h3 class="about-me">
            Year 3 Creative Computing student at
            <a
              class="d-contents iadt-link"
              target="_blank"
              href="https://www.iadt.ie/courses/creative-computing"
              >IADT,</a
            >
            <br />
            developer at
            <a class="teal" target="_blank" href="https://www.web-space.design"
              >WebSpace</a
            >.
          </h3>
          <div class="contact-links">
            <a
              href="https://github.com/jakewarrenblack"
              target="_blank"
              class="d-contents"
            >
              <div class="contact-link">Github</div>
            </a>
            <a
              href="https://www.linkedin.com/in/jake-wb/"
              target="_blank"
              class="d-contents"
            >
              <div class="contact-link">LinkedIn</div>
            </a>
            <div id="email" class="contact-link">Email</div>
          </div>
        </div>
      </div>
      <div class="projects">
        <h1 class="projects-title z-index-100">Projects</h1>

        <!-- <carousel :scrollPerPage="false" :perPage="3" class="z-index-100">
          <slide class="p-2" v-for="project in projects" :key="project.id">
            <b-card :title="`${project.title}`" tag="article">
              <img
                class="carousel_img"
                v-if="`${project.images[0]}`"
                :src="require(`@/assets/images/${project.images[0]}`)"
              />
              <b-card-text>
                {{ project.description }}
              </b-card-text>
              <b-row class="mx-auto">
                <router-link v-if="project.demo" :to="{ name: project.demo }">
                  <b-button href="#" variant="primary"
                    >View demo</b-button
                  ></router-link
                >
                <a :href="project.links.github"
                  ><b-button href="#" variant="primary">Github</b-button></a
                >
              </b-row>
            </b-card>
          </slide>
        </carousel> -->
        <!-- <div class="glider">
          <div v-for="project in projects" :key="project.id">
            <b-card :title="`${project.title}`" tag="article">
              <img
                class="carousel_img"
                v-if="`${project.images[0]}`"
                :src="require(`@/assets/images/${project.images[0]}`)"
              />
              <b-card-text>
                {{ project.description }}
              </b-card-text>
              <b-row class="mx-auto">
                <router-link v-if="project.demo" :to="{ name: project.demo }">
                  <b-button href="#" variant="primary"
                    >View demo</b-button
                  ></router-link
                >
                <a :href="project.links.github"
                  ><b-button href="#" variant="primary">Github</b-button></a
                >
              </b-row>
            </b-card>
          </div>
        </div> -->
        <b-carousel-list
          :progress="progress"
          :arrow-hover="false"
          :progress-type="progressType"
          class="z-index-100"
          v-model="test"
          :data="projects"
          v-bind="al"
        >
          <template #item="project">
            <div class="card">
              <b-card-title>{{ project.title }}</b-card-title>
              <img
                class="carousel_img"
                v-if="`${project.images[0]}`"
                :src="require(`@/assets/images/${project.images[0]}`)"
              />
              <b-card-text>
                {{ project.description }}
              </b-card-text>
              <b-row class="mx-auto">
                <router-link v-if="project.demo" :to="{ name: project.demo }">
                  <b-button href="#" variant="primary"
                    >View demo</b-button
                  ></router-link
                >
                <a :href="project.links.github"
                  ><b-button href="#" variant="primary">Github</b-button></a
                >
              </b-row>
              <div class="card-content">
                <div class="content">
                  <div class="row mx-auto">
                    <b-field v-for="tag in project.tags" :key="tag">
                      <b-tag rounded>{{ tag }}</b-tag>
                    </b-field>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-carousel-list>
      </div>
      <div class="skills">
        <h1 class="projects-title">Skills</h1>
        <div class="skills-contain">
          <div class="skill">HTML</div>
          <div class="skill">CSS</div>
          <div class="skill">JavaScript</div>
          <div class="skill">PHP</div>
          <div class="skill">MySQL</div>
          <div class="skill">Java</div>
          <div class="skill">Bootstrap</div>
          <div class="skill">Git & Github</div>
          <div class="skill">P5.js</div>
          <div class="skill">Illustrator</div>
          <div class="skill">Photoshop</div>
          <div class="skill">Figma</div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    this.getAllProjects();
    const curtain = document.getElementById("curtain");
    const email = document.getElementById("email");
    const close = document.getElementById("close");
    const body = document.getElementById("body");

    email.addEventListener("click", function () {
      // curtain.classList.add('translate0');
      curtain.style.transform = "translateY(0%)";
      body.classList.add("overflow-hidden");
    });

    close.addEventListener("click", function () {
      // curtain.classList.remove('translate0');
      curtain.style.transform = "translateY(100%)";
      body.classList.remove("overflow-hidden");
    });

    var arrows = document.querySelectorAll(".icon");

    arrows.forEach(function (arrow) {
      arrow.style.background = "transparent";
      arrow.style.border = "none";
      arrow.style.transform = "scale(2)";
      arrow.style.opacity = 0.75;
    });
  },
  data() {
    return {
      test: 0,
      projects: [],
      al: {
        progress: true,
        progressType: "is-primary",

        itemsToShow: 1,
        iconSize: "is-medium",
        breakpoints: {
          768: {
            itemsToShow: 2,
            iconSize: "is-large",
          },
          960: {
            itemsToShow: 2,
            iconSize: "is-large",
          },
          1024: {
            itemsToShow: 3,
          },
        },
      },
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
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  text-align: center;
}

.VueCarousel {
  width: 100%;
}

.carousel-slide{
  display:flex!important;
}

/* .carousel-arrow .icon{
  padding: 1.5rem!important;
  background: transparent!important;
  border: none!important;
} */

.mdi-chevron {
  transform: scale(2);
}

.card-title {
  font-size: 3rem;
  font-weight: 700;
  font-family: "Poppins";
}

.VueCarousel-slide {
  visibility: visible;
  flex-basis: 33.3%;
  /* width: 33.3%; */
}

.carousel_img {
  max-height: 15rem;
  object-fit: contain;
}

.caousel-arrow {
  display: none !important;
}

.carousel-list{
  overflow:visible!important;
}

.card {
  background: transparent !important;
  border: 0.5rem solid #2a9d8f;
  border-radius: 2.5rem;
  font-size: 1.5rem;
  color: white;
  font-family: "Lato", sans-serif;
  /* min-height: 50rem; */
  height:100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem;
  align-items: center;
  margin: 1rem;
}

.tag {
  padding: 1.5rem;
  font-size: 1.2rem;
  font-family: "Lato";
  font-weight: 700;
  margin: 1rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.title {
  font-size: 2rem !important;
  padding: 1rem !important;
  font-weight: 700 !important;
}

.card-text {
  padding: 0 2rem;
}

.teal {
  color: #2a9d8f;
}

.z-index-100 {
  z-index: 100;
}

.VueCarousel {
  margin: 0 8rem;
}

.curtain {
  background: #0a1224;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  position: fixed;
  transform: translateY(100%);
  transition: all 300ms;
  /* display:none; */
}

#submit-btn {
  font-size: 2rem;
  border: none;
  background: #0a1224;
  font-weight: 700;
  height: 4rem;
  background: #2a98df;
  text-transform: capitalize;
  width: 100%;
}

.form-contain {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
}

.close-contain {
  display: flex;
}

.contact {
  width: 40%;
  height: 70%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.contact-input {
  color: white;
  text-align: left;
  font-size: 1.5rem;
  background: transparent;
  width: 100%;
  border-radius: 0.5rem;
  border: 0.25rem solid rgba(0, 255, 255, 0.5);
  padding: 1rem;
}

textarea {
  resize: none;
  max-width: 100%;
}

#close {
  background: transparent;
  border: none;
  transition: all 1s ease;
}

#close:hover {
  transform: rotate(360deg);
}

.translate0 {
  transform: translateY(0%) !important;
  display: block;
}

.overflow-hidden {
  overflow: hidden;
}

@keyframes zoomInDown {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

a.d-contents div,
a.d-contents:nth-child(2) + div {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

a.d-contents:nth-child(1) div {
  animation-delay: 0.5s;
}

a.d-contents:nth-child(2) div {
  animation-delay: 1s;
}

a.d-contents:nth-child(2) + div {
  animation-delay: 1.5s;
}

#email:hover {
  cursor: pointer;
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

body {
  width: 100vw;
  overflow-x: hidden;
}

.iadt-link {
  color: white;
}

.projects,
.skills {
  overflow: visible;
}

.my_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #0f0e0e;
}

.landing,
.projects,
.skills,
.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing,
.projects,
.skills {
  position: relative;
}

.landing {
  height: 100vh;
}

.d-contents {
  display: contents;
}

.contact-link {
  border: 0.25rem solid #2a9d8f;
  color: white;
  font-size: var(--step-2);
  padding: 0.75rem 4rem;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  transition: ease all 300ms;
}

.contact-link:hover {
  color: #2a9d8f;
}

.landing-background {
  z-index: 3;
}

.landing-foreground {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(15, 14, 14, 0.5);
  z-index: 3;
}

.circle {
  background: #2a9d8f;
  border-radius: 100rem;
}

.circle:nth-child(1) {
  position: absolute;
  width: 15vw;
  height: 15vw;
  top: 25%;
  left: 20%;
  animation: float 3s infinite;
}

.circle:nth-child(2) {
  position: absolute;
  width: 35vw;
  height: 35vw;
  top: 50%;
  left: 65%;
  animation: float 4s infinite;
}

@keyframes float {
  0% {
    transform: translateY(4%);
  }
  60% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(4%);
  }
}

.my-name {
  font-size: var(--step-5);
  font-weight: 700;
}

.my-name,
.about-me {
  animation-delay: 0.5s;
  animation-fill-mode: both;
  animation-duration: 0.8s;
  animation-name: zoomInDown;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}

.about-me {
  font-size: var(--step-2);
  font-weight: 300;
}

h2,
p {
  font-family: "Lato", sans-serif;
}

.my-name,
.about-me {
  margin-bottom: 2rem;
  z-index: 4;
  color: white;
}

.projects {
  background: #0a1224;
  z-index: 6;
}

.projects::before {
  content: "";
  background: #0a1224;
  position: absolute;
  top: -50px;
  width: 110%;
  height: 150px;
  transform: rotate(-3deg);
  z-index: 5;
}

.projects::after {
  content: "";
  background: #0a1224;
  position: absolute;
  bottom: -5rem;
  width: 110%;
  height: 15rem;
  transform: rotate(-3deg);
}

.skills::before {
  content: "";
  background: #14213d;
  position: absolute;
  top: -5rem;
  width: 110%;
  /* height: 100px; */
  height: 10rem;
  transform: rotate(-3deg);
}

.skills {
  margin-top: 350px;
}

.project-card {
  border: 0.5rem solid #2a9d8f;
  border-radius: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  /* height:600px; */
  margin: 30px 50px;
  padding: 0 25px 25px 25px;
  z-index: 1;
  transition: all ease 300ms;
  /* 3d transform stuff */
  /* allow transform to occur within centre of my_container */
}

.card-face {
  height: 100%;
  width: 100%;
  /* backface-visibility: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.github-stats {
  list-style: none;
}

.stat {
  border: 0.25rem solid #2a9d8f;
  margin: 1rem;
  border-radius: 5rem;
  font-size: 1.5rem;
  padding: 0.75rem;
  color: white;
}

.github-stats {
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  margin: 1rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  border: 0.25rem solid #2a9d8f;
  padding: 0.75rem;
  color: white;
  background: #0f0e0e;
  text-transform: uppercase;
}

button:hover {
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5%);
}

.project-card-image {
  /* width:80%;
    padding:2rem; */
  margin: 1rem 0 1rem 0;
  height: 60%;
}

.project-card-image img {
  border-radius: 15px;
}

.project-card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.projects-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  perspective: 1000px;
  perspective-origin: center center;
  z-index: 12;
  width: 100%;
}

.project-card-title,
.project-card-description {
  color: white;
}

.project-card-description {
  font-size: 1.5rem;
}

.projects-title {
  color: white;
  font-size: var(--step-5);
  margin: 5rem;
}

.skills {
  background: #14213d;
}

.skill {
  color: black;
  background: white;
  font-size: var(--step-0);
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  margin: 0.5rem;
  font-weight: 700;
}

.skills-contain {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.form-head {
  align-self: flex-start;
  justify-content: center;
  color: white;
}

.head-contain {
  height: 12%;
}

/* Smartphones (portrait and landscape) ----------- */
@media all and (max-width: 800px) {
  /* Carousel cards */

  .projects-row {
    flex-direction: column !important;
  }

  .card-title {
    font-size: 2rem;
  }
  .card {
    margin: 0;
    margin-right: 1rem;
    min-height: 50rem;
    height: unset;
  }

  .project-card {
    width: unset;
  }

  .projects-title {
    z-index: 5;
  }

  .contact {
    width: 85%;
  }

  .skills-contain {
    overflow-x: scroll;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: start;
  }

  .skills {
    width: 100%;
    margin-top: 0;
  }

  .projects::before,
  .projects::after,
  .skills::before {
    display: none;
  }
}
</style>
