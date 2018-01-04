import router from '../../router'
import axios from 'axios'
import swal from 'sweetalert'

const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers:{
    Authorization : localStorage.getItem('token')
  }
})

const state = {
  Users: []
}

const mutations = {
  saveUsers (state, payload){
    console.log('data register user')
    state.Users.push(payload)
    payload = {}
  }

}

const actions = {
  doLogin({ commit }, payload) {
    console.log(payload);
    http.post('/authentication/login', payload)
    .then(({data}) => {
      if(!data){
        swal({
          title: 'Ooops',
          text: data.message,
          icon: 'error',
          button: 'OK'})
      }else{
        localStorage.setItem("token", data.token)
        router.push('/home')
      }
    }).catch((err) => {
      console.log(err);
    })

  },

  doRegister({ commit }, payload) {
    let self = this
    http.post('/authentication/register', payload)
    .then(({data}) => {
      console.log(data)
      commit('saveUsers', data)
      swal({
        icon: 'success',
        text: data.message,
        button: 'OK'
      })
    }).catch((err) => {
      console.log(err)
    })

  }
}

export default {
  state,
  mutations,
  actions
}
