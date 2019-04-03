<template>
  <v-card v-if="employee" dark flat color="primary" class="mx-auto">
    <v-card-title>
      <v-icon large left>fas fa-user</v-icon>
      <span class="title font-weight-light">Employee #{{employee.id}}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="employee = null">
        <v-icon>fas fa-times</v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class>
      <v-layout row wrap>
        <v-flex xs6>Email</v-flex>
        <v-flex xs6>
          <b>{{employee.email}}</b>
        </v-flex>

        <v-flex xs6>Name</v-flex>
        <v-flex xs6>
          <b>{{ employee.firstname }} {{employee.lastname}}</b>
        </v-flex>

        <v-flex xs6>Roles</v-flex>
        <v-flex xs6>
          <span class="mr-1" v-for="role in employee.roles" :key="role.name">
            <i>{{role.name}}</i>
          </span>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-card-actions>
      <!-- <v-btn color="accent" @click="edit(rateCategory)">Edit</v-btn> -->
      <!-- <v-btn color="error" @click="edit(rateCategory)">Delete</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["employee"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
