<template>
  <div class="text-xs-center" v-if="user">
    <h1>Welcome {{user.email}}</h1>
    <v-btn color="primary" :to="{name: 'calling'}">
      <v-icon left>fas fa-phone</v-icon>Start Calling
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.$store.dispatch("getCalls");
  }
};
</script>

<style>
</style>
