<!-- embed or place your vue components in template-->
<template>
  <v-app>
    <v-content>
      <header>
        <NavigationBar />
      </header>
      <scheduleme />
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar/NavigationBar";
import scheduleme from "./components/scheduleme/scheduleme";

export default {
  name: "App",

  components: {
    NavigationBar,
    scheduleme,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

header {
  width: 100vw;
  background-color: rgb(255, 255, 255);
  padding: 15px;
}
</style>
