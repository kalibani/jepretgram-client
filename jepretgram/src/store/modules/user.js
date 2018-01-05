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

  }

}

const actions = {
  doLogin({ commit }, payload) {
    console.log(payload);
    http.post('/authentication/login', payload)
    .then((response) => {
      console.log(response.data);
      if(response.data == 'Unregistered Email/Username, Please Register First!'){
        swal({
          title: 'Ooops',
          text: response.data,
          icon: 'error',
          button: 'OK'})
      }else if (!response.data.token) {
        swal({
          title: 'Ooops',
          text: response.data.message,
          icon: 'error',
          button: 'OK'})
      }else{
        swal({
          title: 'OK',
          text: response.data.message,
          icon: 'success',
          button: 'OK'
        }).then(() => {
          localStorage.setItem("token", response.data.token)
          location.reload()
          router.push('/home2')
        })
      }
    }).catch((err) => {
      console.log(err);
    })

  },

  doRegister({ commit }, payload) {
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
  },

  updatePhoto({commit}, payload){
    http.put('/authentication/register/'+id, payload)
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
