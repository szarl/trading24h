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
export default class StartScreen extends Vue {

}
</script>
<style>
.mainScreen {
    display: flex;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.marginTop {
    margin-top: 100px;
}

.scale {
    font-size: 250px !important;
    margin-top: 50px;
}
</style>
