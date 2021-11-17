<template>
  <div class="card">
    <div class="card__patient">
      <span>{{ patient.name }} {{ patient.lastName }}</span>
      <span>Adress: {{ patient.adress }}</span>
      <span>Age: {{ patient.age }}</span>
      <span>Tell: {{ patient.phoneNumber }}</span>
      <span>Gender: {{ patient.gender }}</span>
    </div>
    <div class="card__med">medicament</div>
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
  },
};
</script>
