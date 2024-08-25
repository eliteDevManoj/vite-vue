import './bootstrap';

import { createApp } from "vue";

import Dashboard  from "../components/Dashboard.vue"
import Login from "../components/auth/Login.vue"
import Register from "../components/auth/Register.vue"
import ForgotPassword from "../components/auth/ForgotPassword.vue"

const app = createApp({});

/** register components here */
app.component('login-component', Login)
app.component('register-component', Register)
app.component('forgot-password', ForgotPassword)

app.component('dashboard-component', Dashboard)

app.mount('#app');