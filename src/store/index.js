// store/index.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import router from '../router/index';
import { Magic, SDKError, RPCError, ExtensionError } from 'magic-sdk';


const magicKey = new Magic(process.env.VUE_APP_MAGIC_API_KEY);

export default createStore({
  state: {
    user:null
  },
  mutations: {
    setUser(state, userData) {
        state.user = userData
    }
  },
  actions: {
    async login({ commit }, email) {
        try{
            await magicKey.auth.loginWithMagicLink(email);
            const data = await magicKey.user.getMetadata();
            commit('setUser', data);
            await router.push({ name: 'Dashboard' })
        }catch(error){
            if(error instanceof SDKError){
                console.log(error)
            }
            if(error instanceof RPCError){
                console.log(error)
            }
            if(error instanceof ExtensionError){
                console.log(error)
            }
        }
    },
    async logout({ commit }){
        await magicKey.user.logout();
        commit('setUser', null);
        await router.push({ name: 'Home'})
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})