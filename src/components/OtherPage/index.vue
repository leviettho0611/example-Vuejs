<template >
    <div>
    <h1>Other PAGE</h1>
    <p>{{ data }}</p>
    </div>
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
}
</script>
<style lang="">
    
</style>