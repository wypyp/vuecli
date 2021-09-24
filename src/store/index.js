import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from '@/utils/request';
import qs from 'qs'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state:{
    loginToken: '',
  },
  getters:{},
  mutations:{
    setLoginToken (state, value) {
      state.loginToken = value;
    },
  },
  actions:{
    setCachedkmInfo ({ state, commit }, value) {
      const { event, data } = value;
      commit(event, data);
      const { identificationDocumentInfo, selfiePhotoInfo, proofOfAddressInfo } = state;
      return axios.post('/api/roxe-kyc/web/cache-km-info', qs.stringify({
        info: JSON.stringify({
          identificationDocumentInfo,
          selfiePhotoInfo,
          proofOfAddressInfo
        })
      })).then(() => {
        return true;
      }).catch(() => {
        return false
      })
    }
  },
})