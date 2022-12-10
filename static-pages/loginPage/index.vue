<template>
    <div class="mainScreen">
        <v-container>
            <v-text-field v-model="user.email" label="email"></v-text-field>
            <v-text-field v-model="user.password" label="password"></v-text-field>
            <div> Create account </div>
            <v-btn @click="loginAction"> Login </v-btn>
        </v-container>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import User from "~/model/User";

@Component
export default class LoginPage extends Vue {
    user: User = new User();

    loginAction() {
        console.log('loginAction');
        this.$router.push('/dashboard');
    }
}
</script>
<style>
</style>
