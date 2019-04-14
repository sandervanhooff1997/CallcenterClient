<template>
  <div class="text-xs-center" v-if="user">
    <h1>{{user.email}}</h1>
    <v-btn color="primary" class="elevation-0" :to="{name: 'calling'}">
      <v-icon left>fas fa-phone</v-icon>Start Calling
    </v-btn>
    <chat></chat>
    <p id="output"></p>
    <canvas class="mt-5 chart" id="myChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.$store.dispatch("getCalls");
  },

  mounted() {
    var randomScalingFactor = function() {
      return Math.round(Math.random() * 100);
    };

    var config = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor(),
              randomScalingFactor()
            ],
            backgroundColor: [
              this.$vuetify.theme.error,
              this.$vuetify.theme.warning,
              this.$vuetify.theme.accent,
              this.$vuetify.theme.success,
              this.$vuetify.theme.primary
            ],
            label: "Dataset 1"
          }
        ],
        labels: ["Calls", "Companies", "Employees", "Products", "Subscriptions"]
      },
      options: {
        responsive: true
      }
    };

    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, config);
  }
};
</script>

<style>
.chart {
  width: 80%;
}
</style>
