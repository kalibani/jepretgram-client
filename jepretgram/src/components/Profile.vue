<template lang="html">
  <div>
    <app-navbar/>
    <header id="headers">
      <div class="container">
      </div>
    </header>
    <!-- edit form column -->
    <div class="row">
      <!-- left column -->
      <div class="col-md-2" id="profiles">
        <div class="text-center">
          <div v-if="!profiles.image">
            <img class="avatar img-circle img-thumbnail" alt="avatar" src="../assets/image/user.png"/>
            <h2>Select Profile Photo</h2>
            <input type="file" class="text-center center-block well well-sm" id="inputFile" @change="onFileChange">
          </div>
          <div v-else>
              <img class="avatar img-circle img-thumbnail" :src="profiles.image" id="upfile1" style="cursor:pointer"/>
              <h4>Update Profile Photo</h4>
              <input type="file" class="text-center center-block well well-sm" id="inputFile" @change="onFileChange">
          </div>
        </div>
      </div>
      <div class="col-md-2 profile">
          <h3>Kautzar Alibani
            <button type="button" class="btn btn-secondary btn-sm">Edit Profile</button>
          </h3>
          <h3>Kautzar Alibani</h3>
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
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/21BC9C/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: 21BC9C &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/33495E/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: 33495E &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/F1C42A/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: F1C42A &amp; Image Foreground: FFFFFF</div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/2ECC71/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: 2ECC71 &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/E74C3C/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: E74C3C &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/3398DB/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: 3398DB &amp; Image Foreground: FFFFFF</div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/798795/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: 798795 &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/FF0044/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: FF0044 &amp; Image Foreground: FFFFFF</div>
        </div>
        <div class="col-sm-4">
          <img src="http://placehold.it/612x612/BDC3C7/FFFFFF&amp;text=loading" class="img-responsive">
          <div class="caption">Image Background: BDC3C7 &amp; Image Foreground: FFFFFF</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
export default {
  components : {
    appNavbar : navbar
  },
  data(){
    return {
      profiles: {
        follower: 'follow',
        image: ''
      },

    };
  },

  methods:{

    onFileChange(e) {
      let data = new FormData();
      // data.append('email',this.profiles.email)
      // data.append('username',this.profiles.username)
      // data.append('password',this.profiles.password)
      // data.append('fullname',this.profiles.fullname)
      data.append('image',document.getElementById('inputFile').files[0])
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
        self.profiles.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


}
</script>

<style scoped="" lang="css">
  @import "../assets/css/profile.css";
</style>
