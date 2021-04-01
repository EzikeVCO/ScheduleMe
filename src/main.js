// import all your vue files into the vue brain //
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

// This Brings in your plugin into the vueapp
Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;
//this installs your firestore configurartion from your firestore database
firebase.initializeApp({
  apiKey: "AIzaSyDqHh1PQ6gxIL1pZ9CHUW-bmoO7KdOps54",
  authDomain: "scheduleme-5e144.firebaseapp.com",
  projectId: "scheduleme-5e144",
  storageBucket: "scheduleme-5e144.appspot.com",
  messagingSenderId: "25287615658",
  appId: "1:25287615658:web:feba0d64b892d0c366dcd3",
});

/// import for connecting the firestore database
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
