<template>
    <div class="mainScreen">
        <v-icon class="scale" >mdi-scale-balance</v-icon>
        <v-btn class="marginTop" nuxt to="/loginPage"> Zacznij trading ! </v-btn>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class MyItems extends Vue {

}
</script>
<style>
</style>
