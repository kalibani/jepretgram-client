<template lang="html">
  <div>
    <app-navbar/>
    <div class="container gallery" id="gallery">
      <div class="row">
        <div class="well well-lg">
          <div class="user">
            <label style="float:right;" id="follow">
              
              <span class="btn btn-sm btn-primary">
                <input type="checkbox" v-model="follow" true-value="following"
                false-value="follow" class="custom-control-input">{{follow}}
              </span>
            </label>
              <img class="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile" style="float:left;">
              <h3>Marco </h3>
          </div>
          <img src="http://placehold.it/612x612/21BC9C/FFFFFF&amp;text=loading" class="img-responsive">
          <br>
          <div class="love">
            <div class="pretty p-icon p-toggle p-plain">
              <input type="checkbox" />
              <div class="state p-off">
                <i class="icon fa fa-heart-o"></i>
                <label>fa-heart-o</label>
              </div>
              <div class="state p-on p-info-o">
                <i class="icon fa fa-heart"></i>
                <label>fa-heart</label>
              </div>
            </div>

          </div>
          <div class="caption">Image Background: 21BC9C &amp; Image Foreground: FFFFFF</div>
          <form class="form-horizontal"role="form" id="comment">
            <div class="form-group">
              <div class="col-lg-8">
                <input class="form-control" type="text" placeholder="Add a comment... ">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
export default {
  data(){
    return {
      follow: 'follow'
    };
  },
  components : {
    appNavbar : navbar
  }
}
</script>

<style scoped="" lang="css">
  @import "../assets/css/home.css";
</style>
