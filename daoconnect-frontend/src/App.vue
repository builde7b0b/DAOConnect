<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div id="app">
    <RegistrationForm />
  </div>
</template>

<script>

import RegistrationForm from './components/RegistrationForm.vue';
export default {
  name: 'App',
  components: {
    
    RegistrationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
