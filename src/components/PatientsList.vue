<template>
  <ul class="patients-list">
    <PatientCard
      :key="patient.id"
      v-for="(patient, index) in patients"
      :patient="patient"
      :index="index"
    />
  </ul>
</template>

<script>
import PatientCard from './PatientCard.vue';
export default {
  name: 'PatientsList',
  props: {
    patients: Array,
  },
  components: {
    PatientCard,
  },
};
</script>
