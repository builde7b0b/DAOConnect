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
import axios from 'axios';

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

            axios.post('/api/login', loginData)
            .then(response => {
                //Handle successful login
                const sessionToken = response.data.sessionToken;
                // Store session token securely
                //Redirect to the desired page
                this.$router.push('/dashboard');
            })
            .catch(error => {
                //Handle login error
                console.error(error);
            });
        }
    }
}
<script>