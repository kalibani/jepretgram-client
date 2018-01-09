import router from '../../router'
import axios from 'axios'
import swal from 'sweetalert'

const http = axios.create({
  baseURL: 'http://jepretgram-api.kautzaralibani.com/api',
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
    console.log(state.posts);
  },

  savePost (state, payload) {
    state.posts.push(payload)
    console.log('ini hasilnya', state.posts);
  },

  saveLove (state, payload){
    console.log('b',payload.data.love);
    console.log('p', state.posts);

  },

  saveComment (state, payload){
    console.log('ini comment di mutations', payload)

  }

}

const actions = {
  getAll({ commit }, payload) {
    http.get('/jepret/home', payload)
    .then(({data}) => {
      commit('saveData', data)
    }).catch((err) => {
      console.log(err)
    })
  },

  postImage({ commit }, payload){
    console.log('data payload', payload)
    http.post('/jepret/post', payload)
    .then(({data}) =>{
      if (data.message == 'Post Succesfully Added!') {
        swal({
          title: 'OK',
          text: data.message,
          icon: 'success',
          button: 'OK'
        }).then(() => {
          commit('saveData', data)
          location.reload()
        })
      }else {
        swal({
          title: 'Ooops',
          text: 'Upload new image failed',
          icon: 'error',
          button: 'OK'
        })
      }
    }).catch((err) => {
      console.log(err);
    })
  },

  love({commit}, payload){
    http.post('/jepret/givelove', {id:payload})
    .then(({data}) => {
      commit('saveLove', data)
    })
    .catch((err) => {
      console.log(err);
    })
  },

  tambahcomment({ commit }, payload) {
    http.post('/jepret/comment', payload)
    .then(({data}) => {
      commit('saveComment', data)
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
