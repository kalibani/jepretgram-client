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
  user: [],
  profile: []
}

const mutations = {
  isSelf (state, payload){
    console.log('data user login----', payload)
    state.user = payload
    console.log('data user login', state.user.userId)
  },
  saveProfile (state, payload){
    console.log('data Profile user----', payload)
    state.profile = payload
    console.log('data Profile user', state.profile)
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
          router.push('/home')
        })
      }
    }).catch((err) => {
      console.log(err);
    })

  },

  doRegister({ commit }, payload) {
    http.post('/authentication/register', payload)
    .then(({data}) => {
      swal({
        icon: 'success',
        text: data.message,
        button: 'OK'
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  //
  // updatePhoto({commit}, payload){
  //   http.put('/authentication/register/'+id, payload)
  //   .then(({data}) => {
  //     console.log(data)
  //     commit('saveUsers', data)
  //     swal({
  //       icon: 'success',
  //       text: data.message,
  //       button: 'OK'
  //     })
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // },

  getUserLogin({commit}){
    http.post('/users/myprofile')
    .then(({data}) => {
      commit('isSelf', data)
    })
    .catch((err) => {
      console.log(err);
    })
  },

  getUserById({commit}, id){
    http.get('/users/'+ id )
    .then(({data}) => {
      console.log('getUserById',data);
      commit('saveProfile',data)
    })
    .catch(err =>{
      console.log(err);
    })
  }


}

export default {
  state,
  mutations,
  actions
}
