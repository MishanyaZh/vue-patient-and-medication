<template>
  <div class="home">
    PatientsList
    <div class="patients-list">
      <div>
        <PatientCard
          v-for="patient in patients"
          :key="patient.id"
          :patient="patient"
          :medicine="medicine"
        />
      </div>
      <div>
        <MedicineCard
          v-for="medic in medicine"
          :key="medic.id"
          :medic="medic"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PatientCard from '@/components/PatientCard.vue';
import MedicineCard from '@/components/MedicineCard.vue';
// @ is an alias to /src

export default {
  name: 'patiensList',
  components: {
    PatientCard,
    MedicineCard,
  },
  methods: {},
  created() {
    this.$store.dispatch('fetchPatients');
    this.$store.dispatch('fetchMedicine');
  },
  computed: {
    patients() {
      const pat = this.$store.state.patients;
      return pat;
    },
    medicine() {
      return this.$store.state.medicine;
    },
    // firstPatientById() {
    //   return this.$store.getters['getPatientById']('1361dd38-f570-4108-b3a6-1df278b5ea9c0');
    // }
  },
};
</script>
