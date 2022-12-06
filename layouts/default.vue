<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mx-auto mb-0">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container class="mainWrapper">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      Twórcy:
      <span v-for="autor in autors" class="autor"> {{ autor }} </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import EnumMenuItems from "~/components/leftPanel/EnumMenuItems";
import { EnumAutors } from "~/components/footer/EnumAutors";

@Component
export default class DefaultLayout extends Vue {
  title = 'TrandingApp';
  drawer = false;
  items = EnumMenuItems.getAllValues();
  autors = null;
  created() {
    this.autors = EnumAutors;
  }
}
</script>

<style>
.mainWrapper {
  max-width: 900px;
  margin: auto;
}

.v-toolbar__title {
  padding: 0 !important;
  position: relative;
  left: -20px;
}

.autor {
  margin: 0 15px;
}
</style>
