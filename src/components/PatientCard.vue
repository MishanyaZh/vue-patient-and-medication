<template>
  <div class="card-patient">
    <span>{{ patient.name }} {{ patient.lastName }}</span>
    <span>Adress: {{ patient.adress }}</span>
    <span>Age: {{ patient.age }}</span>
    <span>Tell: {{ patient.phoneNumber }}</span>
    <span>Gender: {{ patient.gender }}</span>
    <!-- <span v-if="medicine.map(med => med.patientIds.map(patientIds =>pat.include(patient.id)))">
      {{ medicine.medicationName }}
    </span> -->
  </div>
</template>

<script>
export default {
  name: 'patientCard',
  props: {
    patient: {
      type: Object,
      required: true,
    },
    medicine: {
      // type: Object,
      required: true,
    },
  },
};
</script>
