<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>
<script>
export default {
  name: '',
  components: {},
  // data() {
  //   return {}
  // },
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>
<style scoped></style>
