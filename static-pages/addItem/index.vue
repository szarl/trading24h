<template>
    <div>
        <v-text-field v-model="item.title" label="nazwa"></v-text-field>
        <v-text-field v-model="item.price" label="Wartość PLN" type="number"></v-text-field>
        <v-text-field v-model="item.amount" label="Ilość" type="number"></v-text-field>
        <v-textarea v-model="item.description" auto-grow label="Opis przedmiotu"></v-textarea>

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

@Component
export default class AddItem extends Vue {

    item = new Item();

    showAlert = false;

    async addItem() {
        this.item.ownerId = userStore.user.id;
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
