<template>
  <div class="card-med">
    <span> Medication: {{ medic.medicationName }}</span>
    <span> Unit: {{ medic.unit }}</span>
    <span> strength: {{ medic.strength }}</span>
    <span> form: {{ medic.form }}</span>
    <span> Date: {{ medic.expDate }}</span>

    <span
      v-for="patientId in medic.patientIds"
      :key="patientId.id"
      :patientId="patientId"
    >
      {{ patientId }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'medicCard',
  props: {
    medic: {
      type: Object,
      required: true,
    },
  },
};
</script>
