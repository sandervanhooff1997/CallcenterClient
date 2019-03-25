<template>
  <v-menu v-if="user" v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>fas fa-user-circle</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"> -->
            <v-icon x-large>fas fa-user-circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{user.email}}</v-list-tile-title>
            <v-list-tile-sub-title>Employee</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action @click="logout()">
            <v-btn icon>
              <v-icon>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <!-- <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="message" color="purple"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>Enable messages</v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="hints" color="purple"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>Enable hints</v-list-tile-title>
        </v-list-tile>
      </v-list>-->

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat @click="menu = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.menu = false;
    }
  }
};
</script>

<style>
</style>
