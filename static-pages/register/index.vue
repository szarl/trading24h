<template>
    <div class="mainScreen">
        <v-container>
            <v-text-field v-model="user.name" label="name" :error-messages="validation['name']"></v-text-field>
            <v-text-field v-model="user.surname" label="surname" :error-messages="validation['surname']"></v-text-field>
            <v-text-field v-model="user.phoneNumber" label="phone number" :error-messages="validation['phoneNumber']"></v-text-field>
            <v-text-field v-model="user.email" label="email" :error-messages="validation['email']"></v-text-field>
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y
                min-width="auto">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date" label="Birthday date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" :error-messages="validation['dob']"></v-text-field>
                </template>
                <v-date-picker v-model="date" :active-picker.sync="activePicker"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01" @change="save"></v-date-picker>
            </v-menu>
            <v-text-field v-model="user.password" label="password" type="password" :error-messages="validation['password']"></v-text-field>
            <NuxtLink to="/loginPage"> Login </NuxtLink>
            <v-btn @click="nextStep"> Next </v-btn>
        </v-container>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import User from "~/model/User";
import { userStore } from "~/store/UserStore";
import { validate } from 'class-validator';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class LoginPage extends Vue {
    user: User = new User();

    validation = {};

    activePicker = null;
    date = null;
    menu = false;

    @Watch('menu')
    setMenu(val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
    }

    @Watch('user', { deep: true })
    resetValid() {
        this.validation = {};
    }

    save(date) {
        // this.$refs.menu.save(date);
        this.date = date;
        this.user.dob = new Date(date);
    };

    created() {
        this.user = userStore.user;
    }

    back() {
        this.$router.back();
    }

    get dob(): string {
        return this.user.dob.toISOString().substring(0, 10);
    }

    set dob(value) {
        this.user.dob = new Date(value);
    }

    async nextStep() {
        const errors = await validate(this.user);
        Object.entries(errors).forEach(([key, error]) => {
            this.validation[error.property] = error.constraints[Object.keys(error.constraints)[0]];
        });

        this.$forceUpdate();

        if (Object.entries(this.validation).length === 0) {
            localStorage.setItem('user', JSON.stringify(this.user));
            // TODO: fix middleware
            // userStore.setUser(this.user);
            this.$router.push('/addressRegister');
        }
    }
}
</script>
<style>

</style>
