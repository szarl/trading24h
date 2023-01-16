<template>
    <div>
        <v-text-field v-model="item.name" label="nazwa"></v-text-field>
        <v-text-field v-model="item.price" label="Wartość PLN" type="number"></v-text-field>
        <v-text-field v-model="item.amount" label="Ilość" type="number"></v-text-field>
        <v-textarea v-model="item.description" auto-grow label="Opis przedmiotu"></v-textarea>
        <v-select :items="categories" label="Kategoria" v-model="item.category"></v-select>
        <v-btn class="marginTop" @click="addItem"> Dodaj przedmiot </v-btn>
        <v-alert :value="showAlert" shaped outlined type="success" transition="slide-x-transition"> Pomyślnie dodano przedmiot !!! </v-alert>
    </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Item from "~/model/Item";
import { itemService } from '~/mod/ItemService';
import { userStore } from "~/store/UserStore";
import { categoryService } from "~/mod/CategoryService";
import User from "~/model/User";

@Component
export default class AddItem extends Vue {

    item = new Item();

    showAlert = false;

    categories = [];

    user: User = new User(JSON.parse(localStorage.getItem('user')));

    async created() {
        this.categories = await categoryService.getAll();
    }

    async addItem() {
        this.item.owner = this.user;
        itemService.addItem(this.item);
        this.item = new Item();
        this.showAlert = true;
        setTimeout(() => this.showAlert = false, 2000);
        // TODO: add error alert
    }

}
</script>
<style>
</style>
