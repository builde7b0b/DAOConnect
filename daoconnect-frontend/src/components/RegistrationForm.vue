<template>
    <form @submit="registerUser">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
  
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
  
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
  
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      registerUser() {
        // Implement the registration logic here
      }
    }
  };
  </script>
  