<template>
  <div>
    <h1>Calls</h1>
  </div>
</template>

<script>
export default {
  computed: {
    calls() {
      return this.$store.getters.calls;
    }
  },
  created() {
    this.$store.dispatch("getCalls");
  }
};
</script>

<style>
</style>
