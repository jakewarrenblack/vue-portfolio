<template>
  <div>
    <Navbar />
    <!-- <div class="container"> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
@font-face {
  font-family: "Lato";
  src: url("./assets/fonts/lato/Lato-Regular.ttf");
}
@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/poppins/Poppins-Bold.ttf");
}
</style>
