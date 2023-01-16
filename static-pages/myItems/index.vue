<template>
    <div>
        <div v-for="item in items" :key="item.id"> {{ item }}</div>
        <v-combobox :items="itemsId" v-model="selectedItems" multiple></v-combobox>
        <v-btn @click="addTransaction"> Dodaj do nowej transackji </v-btn>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import { itemService } from "~/mod/ItemService";
import { userStore } from "~/store/UserStore";
import User from "~/model/User";
import Item from "~/model/Item";
import Transaction from "~/model/Transaction";

@Component
export default class MyItems extends Vue {
    items = [];

    selectedItems: Item[] = [];

    user: User = new User(JSON.parse(localStorage.getItem('user')));

    get itemsId() {
        return this.items.map(item => item.id);
    }

    async created() {
        // TODO:
        // this.items = await itemService.getAllItems(userStore.user.id);
        this.items = await itemService.getAllItems(this.user.id);
    }

    async addTransaction() {
        console.log(this.selectedItems);
        const transaction = new Transaction({owner: this.user, ownerItems: this.selectedItems})
    }
}
</script>
<style>
</style>
