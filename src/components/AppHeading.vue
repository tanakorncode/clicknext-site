<template>
  <h1 class="text-black font-weight-bold text-left heading-tilte" data-aos="fade-right">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "HeadingH1",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .heading-tilte {
    font-size: 1.5rem;
  }
}
</style>
