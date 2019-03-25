<template>
  <div class="text-xs-center">
    <h1>Welcome {{employee.firstname + ' ' + employee.lastname}}</h1>
    <v-btn color="primary" :to="{name: 'calling'}">
      <v-icon left>fas fa-phone</v-icon>Start Calling
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        firstname: "Sander",
        lastname: "van Hooff"
      }
    };
  }
};
</script>

<style>
</style>
