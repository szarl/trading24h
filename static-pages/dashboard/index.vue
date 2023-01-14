<template>
    <v-card>
        <!-- display transcation in scrolable panel -->
        <!-- <transaction></transaction> -->

    </v-card>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import User from "~/model/User";

@Component
export default class Dashboard extends Vue {
    user: User = new User();

    loginAction() {
        this.$router.push('/dashboard');
    }
}
</script>
<style>
</style>
