<template>
  <v-app id="inspire">
    <messages></messages>
    <v-navigation-drawer
      v-if="user"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
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
          <v-list-tile v-else :key="item.text" :to="{name: item.to}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.text }}</v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app>
      <v-toolbar-side-icon v-if="user" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-light">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <user-menu v-if="user"></user-menu>
    </v-toolbar>
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
    dialog: false,
    drawer: null,
    title: "Callcenter",
    items: [
      { text: "Home", icon: "fas fa-home", to: "home" },
      { text: "Start calling", icon: "fas fa-phone", to: "calling" },
      {
        text: "Admin",
        icon: "fas fa-angle-up",
        iconAlt: "fas fa-angle-down",
        model: false,
        children: [
          { text: "Calls", icon: "fas fa-phone", to: "calls" },
          { text: "Companies", icon: "fas fa-building", to: "companies" },
          { text: "Employees", icon: "fas fa-users", to: "employees" },
          { text: "Products", icon: "fas fa-shopping-cart", to: "products" },
          {
            text: "Subscriptions",
            icon: "fas fa-address-book",
            to: "subscriptions"
          }
        ]
      }
    ]
  }),
  computed: {
    user() {
      return this.$store.getters.user;
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