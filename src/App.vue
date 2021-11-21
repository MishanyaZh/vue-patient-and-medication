<template>
  <div id="app">
    app-Hello!!!
    <FilterBtns @filter="filter" :activeFilterBtn="activeFilterBtn" />
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
      allPatients: [],
      activeFilterBtn: 'all',
    };
  },
  methods: {
    async fetchData() {
      try {
        const patientsWithMedicine = [];
        const patientsResponse = await axiosInstance.get(PATIENTS);
        const patientsData = patientsResponse.data;
        // console.log('patientsData', patientsData);

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
            ...patient,
            patientMedicine: patientMedicine,
          });
        });
        this.patients = patientsWithMedicine;
        this.allPatients = patientsWithMedicine;
        console.log('patientsWithMedicine', this.patients);
      } catch (error) {
        console.log(error);
      }
    },
    filter(evt) {
      this.activeFilterBtn = evt.target.name;
      switch (evt.target.name) {
        case '30+':
          this.patients = this.allPatients;
          this.patients = this.patients.filter(patient => patient.age > 30);
          break;
        case 'strength':
          this.patients = this.allPatients;
          //  const bla = this.patients.filter(patient => patient.age < 63);
          // patStr.map(patient => patient.patientMedicine.map(med => med.strength > 8));
          // this.patients = patStr;
          // this.patients.filter(patient => patient.age < 63 && patient.patientMedicine.filter(med=> med.strength >= 8));
          this.patients = this.patients.filter(
            patient =>
              patient.age < 63 &&
              patient.patientMedicine.map(med => med.strength >= 8),
          );
          break;
        default:
          this.patients = this.allPatients;
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
