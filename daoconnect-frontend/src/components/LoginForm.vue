<template>

    <form @submit="login"></form>
    <div>
        <label for="username">Username/Email</label>
        <input type="text" id="username" v-model="username" required>
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
    </div>
    <button type="submit">Login</button>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login(event) {
            event.preventDefault();

            //Make API request to backend for login
            const loginData = {
                username: this.username,
                password: this.password
            }
        }
    }
}</script>