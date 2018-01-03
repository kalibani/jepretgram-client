import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

const my_axios = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers:{
    Authorization : localStorage.getItem('token')
  }
});

const swalPlugin={}
swalPlugin.install = (Vue) => {
  Vue.prototype.$swal = swal
}

Vue.prototype.$http = my_axios
Vue.use(swalPlugin)
Vue.use(Vuex)

const state = {
  Users: [],
  Posts: []
}
const store = new Vuex.Store({
  state
})

export default store
