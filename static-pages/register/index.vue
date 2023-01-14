<template>
    <div class="mainScreen">
        <v-container>
            <v-text-field v-model="user.name" label="name" :error-message="validation['name']"></v-text-field>
            <v-text-field v-model="user.surname" label="surname" :error-message="validation['surname']"></v-text-field>
            <v-text-field v-model="user.phoneNumber" label="phone number"
                :error-message="validation['phoneNumber']"></v-text-field>
            <v-text-field v-model="user.email" label="email" :error-message="validation['email']"></v-text-field>
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="user.dob" label="Birthday date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="user.dob" :active-picker.sync="activePicker" :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
            </v-menu>
            <v-text-field v-model="user.password" label="password" type="password"></v-text-field>
            <NuxtLink to="/loginPage"> Login </NuxtLink>
            <v-btn @click="nextStep"> Next </v-btn>
        </v-container>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import User from "~/model/User";
import { userStore } from "~/store/UserStore";
import { validate } from 'class-validator';
import { isEmpty } from 'lodash/isEmpty';

@Component
export default class LoginPage extends Vue {
    user: User = new User();

    validation = {};

    activePicker = null;

    menu = false;

    created() {
        this.user = userStore.user;
    }

    updated() {
        this.validation = {};
    }

    back() {
        this.$router.back();
    }

    save (date) {
        this.$refs.menu?.save(date);
    };

    async nextStep() {
        this.validation = await validate(this.user);
        if (isEmpty(this.validation)) {
            userStore.setUser(this.user);
            this.$router.push('/addressRegister');
        }
    }
}
</script>
<style>

</style>
