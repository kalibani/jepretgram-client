<template lang="html">
  <div class="">
    <app-navbar :user="dataUser"/>
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-offset-1" style="float:right; margin: 8% 7% 8% 0%;">
          <appUpload/>
        </div>
        <br><br><br>
        <div class="col-sm-8 col-sm-offset-1" id="logout">
          <div class="page-header">

          </div>
          <div class="comment-tabs" v-for="p in posts.posts" :key="p._id">
            <div class="tab-content">
              <div class="tab-pane active" id="comments-logout">
                <ul class="media-list">
                  <li class="media">
                    <router-link class="pull-left" :to="{ name: 'Profile', params: {userId : p.posted_by._id} }">
                      <img class="media-object img-circle" :src="p.posted_by.image" alt="profile">
                    </router-link>
                    <a  href="#">
                    </a>
                    <div class="media-body">
                      <div class="well well-lg">
                        <p class="media-heading text-uppercase reviews">{{p.posted_by.username}}</p>
                        <div class="embed-responsive embed-responsive-16by9">
                            <img :src="p.image" class="img-responsive">
                        </div>
                        <div class="love">
                          <div class="pretty p-icon p-toggle p-plain">
                            <input type="checkbox" @click="love(p._id)"
                            :disabled="p.posted_by._id == dataUser.userId"/>
                            <div class="state p-off">
                              <i class="icon fa fa-heart-o"></i>
                              <label></label>
                            </div>
                            <div class="state p-on p-info-o">
                              <i class="icon fa fa-heart"></i>
                              <label></label>
                            </div>
                          </div>
                        </div>
                        <p class="media-comment">
                          <strong>{{p.posted_by.username}}</strong> {{p.caption}}
                        </p>
                        <div class="comment" v-for="c in p.comment">
                          <strong> {{c.user.username}} </strong>
                          {{ c.comment }}
                        </div>
                        <br>
                        <form class="form-horizontal"role="form">
                          <div class="form-group">
                            <div class="col-lg-8">
                              <input class="form-control" v-model="comment" type="text" placeholder="Add a comment... ">
                            </div>
                            <button type="button" name="button" class="btn-primary btn-sm" @click="addComment(p._id)">add comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
	      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import navbar from '@/components/Navbar.vue'
import upload from './Upload.vue'
export default {
  data(){
    return {
      follow: 'follow',
      comment: ''
    }
  },
  components : {
    appNavbar : navbar,
    appUpload : upload

  },
  computed: {
    ...mapState([
      'posts'
    ]),
    dataUser(){
      return this.$store.state.user.user
    }
  },

  methods:{
    ...mapActions([
      'getAll',
      'getUserLogin',
      'love',
      'tambahcomment'
    ]),

    addComment(id){
      let obj = {
        id : id,
        comment : this.comment
      }
      this.tambahcomment(obj)
      this.getAll()
      this.comment = ''
    }
  },

  created(){
    this.getAll(),
    this.getUserLogin()
  }
}
</script>

<style scoped="" lang="css">
  @import "../assets/css/home.css";
</style>
