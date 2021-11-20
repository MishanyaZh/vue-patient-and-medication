<template>
  <div id="app">
    app-Hello!!!
    <FilterBtns />
    <PatientsList :patients="patients" />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import axiosInstance from '@/api/routes';
import { PATIENTS, MEDICINE } from '@/api/index';
import PatientsList from './components/PatientsList.vue';
import FilterBtns from './components/FilterBtns.vue';

export default {
  name: 'App',
  components: {
    PatientsList,
    FilterBtns,
  },
  data() {
    return {
      patients: [],
      filterPatients: [],
      // activeFilterBtn: " ",
    };
  },
  methods: {
    async fetchData() {
      try {
        const patientsWithMedicine = [];
        const patientsResponse = await axiosInstance.get(PATIENTS);
        const patientsData = patientsResponse.data;
        console.log('patientsData', patientsData);

        const medicineResponse = await axiosInstance.get(MEDICINE);
        const medicineData = medicineResponse.data;
        console.log('medicineData', medicineData);

        patientsData.map(patient => {
          const patientMedicine = [];
          medicineData.map(medicine => {
            if (medicine.patientIds.includes(patient.id)) {
              patientMedicine.push(medicine);
            }
          });
          patientsWithMedicine.push({
            patientData: { ...patient },
            patientMedicine: patientMedicine,
          });
        });
        this.patients = patientsWithMedicine;
        console.log('patientsWithMedicine', this.patients);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
