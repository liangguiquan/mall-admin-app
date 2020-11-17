import Vue from 'vue'
import Vuex from 'vuex'
import { setCookie, getUserCookie, removeUserCookie } from '../utils/userCookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,  // 切换菜单的状态
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state){
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userinfo){
      state.user = userinfo;
    },
    loginOut(state){
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: ''
      }
    },
  },
  actions: {
    changeCollapsed({commit}){
      commit('changeCollapsed');
    },
    setUserInfo({commit}, userInfo){
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    loginOut({ commit }){
      commit('loginOut');
      removeUserCookie();
    }
  },
  modules: {
  }
})
