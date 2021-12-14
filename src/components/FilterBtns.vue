<template>
  <div class="filterbtn-box">
    <button class="filterbtn" @click="filter" name="all">All patients</button>
    <button class="filterbtn" @click="filter" name="30+">30+ years old</button>
    <button class="filterbtn" @click="filter" name="strength">
      -63 strength > 8
    </button>
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
