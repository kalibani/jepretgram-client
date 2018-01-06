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
  saveData (state, payload){
    console.log('data postingan user----', payload)
    state.posts = payload.data
    console.log('data postingan user', state.posts)
  },

  savePost (state, payload) {
    state.posts.push(payload)
    console.log('ini hasilnya', state.posts);
  }

}

const actions = {
  getAll({ commit }, payload) {
    http.get('/jepret/home', payload)
    .then(({data}) => {
      console.log(data)
      commit('saveData', data)
    }).catch((err) => {
      console.log(err)
    })
  },

  postImage({ commit }, payload){
    console.log('data payload', payload);
    http.post('/jepret/post', payload)
    .then(({data}) =>{
      console.log('postingan user', data);
      commit('savePost', data)
    }).catch((err) => {
      console.log(err);
    })
  }
}

export default {
  state,
  mutations,
  actions
}
