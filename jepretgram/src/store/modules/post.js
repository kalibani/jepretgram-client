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
  posts: []
}

const mutations = {
  savePost (state, payload){
    console.log('data postingan user----', payload)
    state.posts = payload.data
    console.log('data postingan user', state.posts)
  }

}

const actions = {
  getAll({ commit }, payload) {
    http.get('/jepret/home', payload)
    .then(({data}) => {
      console.log(data)
      commit('savePost', data)
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
