<template>
  <v-app id="inspire">
    <loader v-if="loading"></loader>
    <messages></messages>
    <v-btn
      color="primary"
      @click="drawer = true"
      class="elevation-0"
      v-if="!drawer && user"
      dark
      fab
      fixed
      top
      left
    >
      <v-icon>fas fa-bars</v-icon>
    </v-btn>
    <v-navigation-drawer v-if="user" v-model="drawer" fixed app>
      <v-list dense>
        <user-menu v-if="user"></user-menu>
        <v-divider class="pb-2"></v-divider>
        <template v-for="item in items">
          <v-layout v-if="item.heading" v-can="item.roles" :key="item.heading" row align-center>
            <v-flex xs12>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item.iconAlt"
            append-icon
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(child, i) in item.children" :key="i" :to="{name: child.to}">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else v-can="item.roles" :key="item.text" :to="{name: item.to}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.text }}</v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-toolbar flat :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app>
      <v-toolbar-side-icon v-if="user" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-light">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <user-menu v-if="user"></user-menu>
    </v-toolbar>-->
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    title: "Callcenter",
    items: [
      {
        heading: "Callcenter"
      },
      {
        text: "Home",
        icon: "fas fa-home",
        to: "home"
      },
      {
        heading: "Supervisor",
        roles: ["supervisor", "admin"]
      },
      {
        text: "Calls",
        icon: "fas fa-phone",
        to: "calls",
        roles: ["supervisor", "admin"]
      },
      {
        text: "Companies",
        icon: "fas fa-building",
        to: "companies",
        roles: ["supervisor", "admin"]
      },
      {
        text: "Employees",
        icon: "fas fa-users",
        to: "employees",
        roles: ["supervisor", "admin"]
      },
      {
        text: "Products",
        icon: "fas fa-shopping-cart",
        to: "products",
        roles: ["supervisor", "admin"]
      },
      {
        text: "Subscriptions",
        icon: "fas fa-address-book",
        to: "subscriptions",
        roles: ["supervisor", "admin"]
      },
      {
        heading: "Admin",
        roles: ["admin"]
      },
      {
        text: "Roles",
        icon: "fas fa-user-tag",
        to: "roles",
        roles: ["admin"]
      }
      // {
      //   text: "Supervisor",
      //   icon: "fas fa-angle-up",
      //   iconAlt: "fas fa-angle-down",
      //   model: false,
      //   roles: ["supervisor", "admin"],
      //   children: []
      // },
      // {
      //   text: "Admin",
      //   icon: "fas fa-angle-up",
      //   iconAlt: "fas fa-angle-down",
      //   model: false,
      //   roles: ["admin"],
      //   children: []
      // }
    ]
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(val) {
      // successfull login
      if (val) {
        this.$router.push({
          name: "home"
        });
      } else {
        this.$router.push({
          name: "login"
        });
      }
    }
  }
};
</script>

<style>
</style>
