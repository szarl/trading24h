<template>
    <div class="mainScreen">
        <div>name: {{ user.name }}</div>
        <div>surname: {{ user.name }}</div>
        <div>date of birth: {{ user.dob }}</div>
        <div>password: ******</div>
        <div>emmail: {{ user.email }}</div>
        <div>phone number: {{ user.phoneNumber }}</div>
        <div> TODO: implement edit functions, add styles</div>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { userStore } from "~/store/UserStore";

@Component
export default class Profile extends Vue {
    user = userStore.user;
}
</script>
<style>
</style>
