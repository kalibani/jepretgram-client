<template lang="html">
  <div class="">
    <app-navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-offset-1" style="float:right; margin: 8% 7% 8% 0%;">
          <appUpload/>
        </div>
        <br><br><br>
        <div class="col-sm-8 col-sm-offset-1" id="logout">
          <div class="page-header">

          </div>
          <div class="comment-tabs" v-for="post in posts" :key="post._d">
            <div class="tab-content" v-for= "p in post" :key="p._id">
              <div class="tab-pane active" id="comments-logout">
                <ul class="media-list">
                  <li class="media">
                    <a class="pull-left" href="#">
                      <img class="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg" alt="profile">
                    </a>
                    <div class="media-body">
                      <div class="well well-lg">
                        <p class="media-heading text-uppercase reviews">{{p.posted_by.username}}</p>

                        <div class="embed-responsive embed-responsive-16by9">
                            <img :src="p.image" class="img-responsive">
                        </div>
                        <p class="media-comment">
                          <strong>{{p.posted_by.username}}</strong> {{p.caption}}
                        </p>
                        <form class="form-horizontal"role="form">
                          <div class="form-group">
                            <div class="col-lg-8">
                              <input class="form-control" type="text" placeholder="Add a comment... ">
                            </div>
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
      <div class="page-header text-center">
        <h3 class="reviews"><span class="glyphicon glyphicon-magnet"></span> Uicomments by <a href="https://twitter.com/maridlcrmn">maridlcrmn</a></h3>
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
      follow: 'follow'
    }
  },
  components : {
    appNavbar : navbar,
    appUpload : upload

  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  methods:{
    ...mapActions([
      'getAll'
    ])
  },
  created(){
    this.getAll()
  }
}
</script>

<style scoped="" lang="css">
  @import "../assets/css/home2.css";
</style>
