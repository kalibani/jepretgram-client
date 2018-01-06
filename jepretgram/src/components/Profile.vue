<template lang="html">
  <div>
    <app-navbar :user="dataUser"/>
    <header id="headers">
      <div class="container">
      </div>
    </header>
    <!-- edit form column -->
    <div class="row">
      <!-- left column -->
      <div class="col-md-2" id="profiles">
        <div class="text-center">
          <div v-if="!dataprofile.data.image">
            <img class="avatar img-circle img-thumbnail" alt="avatar" src="../assets/image/user.png"/>
            <h2>Select Profile Photo</h2>
            <input type="file" class="text-center center-block well well-sm" id="inputFile" @change="onFileChange">
          </div>
          <div v-else>
              <img class="avatar img-circle img-thumbnail updatePhoto-2" :src="dataprofile.data.image" style="cursor:pointer"/>
              <div class="updatePhoto">
                <h4>Update Profile Photo</h4>
                <input type="file"
                class="text-center center-block well well-sm" id="inputFile" @change="onFileChange">
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-2 profile">
          <h3> {{ dataprofile.data.username }}
            <button type="button" class="btn btn-secondary btn-sm">Edit Profile</button>
          </h3>
          <h3>{{ dataprofile.data.fullname }}</h3>
      </div>
      <div class="col-md-2 button">
        <h3 style="text-align:center;">
          <span class="btn btn-md btn-primary btn-block">
            <input type="checkbox" v-model="profiles.follower" true-value="following"
            false-value="follow" class="btn btn-md btn-primary btn-block custom-control-input">{{profiles.follower}}
          </span>
        </h3>
      </div>
    </div>
    <div class="container gallery" id="gallery">
      <div class="row">
        <div class="col-sm-4" v-for="data in alldata"
          v-if="data.posted_by._id == dataprofile.data._id">
          <img :src="data.image" class="img-responsive">
          <br>
          <div class="caption" v-if="data.caption"> {{ data.caption }} </div>
          <div class="comment" v-for="c in data.comment">
            <strong> {{c.user.username }} </strong>
            {{ c.comment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import navbar from '@/components/Navbar.vue'
import $ from 'jquery'
export default {
  components : {
    appNavbar : navbar
  },
  data(){
    return {
      profiles: {
        follower: 'follow',
        image: ''
      }
    }
  },
  computed: {
    alldata(){
      return this.$store.state.posts.posts
    },
    dataprofile(){
      return this.$store.state.user.profile
    },
    dataUser(){
      return this.$store.state.user.user
    }
  },

  watch: {
   '$route' (to, from) {
     this.getAll(),
     this.getUserById(this.$route.params.userId)
    }
  },

  created(){
    this.getUserLogin(),
    this.getAll(),
    this.getUserById(this.$route.params.userId)
  },

  methods:{

    ...mapActions([
      'getUserLogin',
      'getUserById',
      'getAll'
    ]),

    onFileChange(e) {
      // let data = new FormData();
      // // data.append('email',this.profiles.email)
      // // data.append('username',this.profiles.username)
      // // data.append('password',this.profiles.password)
      // // data.append('fullname',this.profiles.fullname)
      // data.append('image',document.getElementById('inputFile').files[0])
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var self = this;

      reader.onload = (e) => {
        self.user.profile.data.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


}

</script>

<style scoped="" lang="css">
  @import "../assets/css/profile.css";
</style>
