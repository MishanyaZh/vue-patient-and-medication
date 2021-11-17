<template>
  <div class="home">
    PatientsList
    <!-- {{ patients }} -->
    <div class="patients-list">
      <PatientCard
        v-for="patient in patients"
        :key="patient.id"
        :patient="patient"
      />
    </div>
    <!-- {{ firstPatientById }} -->
  </div>
</template>

<script>
import PatientCard from '@/components/PatientCard.vue';
// @ is an alias to /src

export default {
  name: 'patiensList',
  components: {
    PatientCard,
  },
  methods: {},
  created() {
    this.$store.dispatch('fetchPatients');
  },
  computed: {
    patients() {
      return this.$store.state.patients;
    },
    // firstPatientById() {
    //   return this.$store.getters['getPatientById']('1361dd38-f570-4108-b3a6-1df278b5ea9c0');
    // }
  },
};
</script>
