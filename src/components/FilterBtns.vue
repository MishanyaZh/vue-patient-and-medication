<template>
  <div class="filterbtn-box">
    <button @click="filter" name="all">ALL</button>
    <button @click="filter" name="30+">30+</button>
    <button @click="filter" name="strength">STRENGTH</button>
  </div>
</template>

<script>
export default {
  name: 'FilterBtns',
  props: {
    activeFilterBtn: String,
  },
  methods: {
    filter(e) {
      this.$emit('filter', e);
    },
  },
};
</script>
