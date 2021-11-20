<template>
  <li class="card-patient">
    <span>
      {{ index + 1 }}. {{ patient.patientData.name }}
      {{ patient.patientData.lastName }}
    </span>
    <span>
      <span>Age: {{ patient.patientData.age }} years old.</span>
    </span>
    <!-- <span>Tell: {{ patient.patientData.phoneNumber }}</span>
    <span>Adress: {{ patient.patientData.adress }}</span> -->

    <ul v-for="medicine in patient.patientMedicine" :key="medicine.id">
      <li key="{medicine.id}">
        {{ medicine.medicationName }}, ({{ medicine.strength + medicine.unit }})
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'patientCard',
  props: {
    patient: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
