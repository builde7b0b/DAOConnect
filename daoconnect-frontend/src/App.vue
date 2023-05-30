<template>
  <img alt="DaoConnect logo"   src="">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div id="app">
    <RegistrationForm />
    <ComposeIntegration />
  </div>
</template>

<script>
import ComposeIntegration from './components/ComposeIntegration.vue';
import RegistrationForm from './components/RegistrationForm.vue';
export default {
  name: 'App',
  components: {
    
    ComposeIntegration,
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