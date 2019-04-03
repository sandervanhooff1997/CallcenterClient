<template>
  <div>
    <h1 class="mb-3 text-xs-center">Employees</h1>
    <v-data-table v-if="employees" :headers="headers" :items="employees" class="elevation-1">
      <template v-slot:items="props">
        <tr @click="select(props.item)">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.firstname }} {{props.item.lastname}}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="mt-4" v-if="selectedEmployee">
      <employee :employee="selectedEmployee"></employee>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID #", value: "id" },
        { text: "Email", value: "email" },
        { text: "Name", value: "fullname" }
      ],
      employees: null,
      selectedEmployee: null
    };
  },
  methods: {
    select(employee) {
      this.selectedEmployee = employee;
    }
  },
  created() {
    this.$store
      .dispatch("getEmployees")
      .then(employees => (this.employees = employees))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>
