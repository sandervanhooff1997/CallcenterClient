<template>
  <div class="text-xs-center" v-if="user">
    <h1>{{user.email}}</h1>
    <v-btn color="primary" class="elevation-0" :to="{name: 'calling'}">
      <v-icon left>fas fa-phone</v-icon>Start Calling
    </v-btn>
    <canvas class="mt-5 chart" id="myChart"></canvas>
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

    // document
    //   .getElementById("randomizeData")
    //   .addEventListener("click", function() {
    //     config.data.datasets.forEach(function(dataset) {
    //       dataset.data = dataset.data.map(function() {
    //         return randomScalingFactor();
    //       });
    //     });

    //     window.myPie.update();
    //   });

    // var colorNames = Object.keys(window.chartColors);
    // document.getElementById("addDataset").addEventListener("click", function() {
    //   var newDataset = {
    //     backgroundColor: [],
    //     data: [],
    //     label: "New dataset " + config.data.datasets.length
    //   };

    //   for (var index = 0; index < config.data.labels.length; ++index) {
    //     newDataset.data.push(randomScalingFactor());

    //     var colorName = colorNames[index % colorNames.length];
    //     var newColor = window.chartColors[colorName];
    //     newDataset.backgroundColor.push(newColor);
    //   }

    //   config.data.datasets.push(newDataset);
    //   window.myPie.update();
    // });

    // document
    //   .getElementById("removeDataset")
    //   .addEventListener("click", function() {
    //     config.data.datasets.splice(0, 1);
    //     window.myPie.update();
    //   });
  }
};
</script>

<style>
.chart {
  width: 80%;
}
</style>
