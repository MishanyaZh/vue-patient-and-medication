import Vue from 'vue';
import Vuex from 'vuex';
import axiosInstance from '@/api/routes';
import { PATIENTS } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patients: {},
    pages: 0,
    medicine: {},
  },
  mutations: {
    setPatients(state, { patients }) {
      state.patients = patients;
    },
  },
  actions: {
    fetchPatients({ commit }) {
      return axiosInstance
        .get(PATIENTS)
        .then(res => {
          const { data } = res;
          console.log(data);
          commit('setPatients', { patients: data });
        })
        .catch(err => console.log(err));
    },
  },
  // getters: {
  //   getPatientById: state => id => {
  //     const isPatients = state.patients;
  //     console.log(state.patients);
  //     if (isPatients) {
  //       return isPatients.find(patient => patient.id === id);
  //     }
  //     return null;
  //   },
  // },
  modules: {},
});
