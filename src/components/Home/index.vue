<template>
    <main>
      <p>{{ data }}</p>
      <button @click="updateData">Update Data</button>
    </main>
  </template>
  
  <script>
  export default {
    computed: {
      data() {
        return this.$store.getters.getData;
      },
    },
    methods: {
      updateData() {
        this.$store.dispatch('updateData', 'New Data');
      },
    },
  };
  </script>
  <style>
  main {
    padding: 20px;
  }
  </style>