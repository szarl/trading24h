<template>
    <div class="mainScreen">
        <v-container>
            <v-text-field v-model="user.email" label="email"></v-text-field>
            <v-text-field v-model="user.password" label="password" type="password"></v-text-field>
            <NuxtLink to="/register"> Create account </NuxtLink>
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
        this.$router.push('/dashboard');
    }
}
</script>
<style>
</style>
