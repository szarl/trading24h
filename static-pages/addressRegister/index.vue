<template>
    <div class="mainScreen">
        <v-container>
            <v-text-field v-model="address.country" label="country"></v-text-field>
            <v-text-field v-model="address.city" label="city"></v-text-field>
            <v-text-field v-model="address.street" label="street"></v-text-field>
            <v-text-field v-model="address.houseNumber" label="house number"></v-text-field>
            <v-text-field v-model="address.flatNumber" label="flat number"></v-text-field>
            <v-text-field v-model="address.zipCode" label="zip code"></v-text-field>
            <NuxtLink to="/register"> Back </NuxtLink>
            <v-btn @click="nextStep"> Create account </v-btn>
        </v-container>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import User from "~/model/User";
import { userStore } from "~/store/UserStore";
import Address from "~/model/Address";

@Component
export default class AddressRegister extends Vue {
    user: User = new User();

    get address(): Address {
        return this.user.address;
    }

    created() {
        this.user = userStore.user;
    }

    back() {
        this.$router.back();
    }

    async nextStep() {
        await userStore.register();
        this.$router.push('/dashboard');
    }
}
</script>
<style>
</style>
