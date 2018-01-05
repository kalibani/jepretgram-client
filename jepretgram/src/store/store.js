import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import posts from './modules/post'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    posts
  }
})

export default store
