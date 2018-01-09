<template lang="html">
  <div class="">
    <div class="container">
      <div class="col-md-6">
        <div class="form-group">
          <label>Upload new image</label>
          <div class="input-group">
            <span class="input-group-btn">
              <span class="btn btn-default btn-file">
                Browse… <input type="file" id="imgInp">
              </span>
            </span>
            <input type="text" class="form-control" readonly>
          </div>
        <img id='img-upload'/>
      </div>
      <form class="form-horizontal"role="form">
        <div class="form-group">
          <div class="col-lg-8">
            <input class="form-control caption" id="caption" type="text" v-model="post.caption" placeholder="Write caption... ">
          </div>
        </div>
      </form>
      <button class="btn btn-primary btn-sm upload" type="button" name="button" @click="postImage(data).then(clear)">Upload</button>
    </div>
  </div>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data(){
      return {
        post:{

        }
      }
    },

    computed:{
      data(){
        let data = new FormData();
        data.append('image',document.getElementById('imgInp').files[0])
        data.append('caption',this.post.caption)
        return data

      }
    },

    methods:{
      ...mapActions([
        'postImage'
      ]),
      clear(){
        this.post = {}
      }

    }
  }

  $(document).ready( function() {
    $(".caption").hide()
    $(".upload").hide()
    $(document).on('change', '.btn-file :file', function() {
      var input = $(this),
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
      var input = $(this).parents('.input-group').find(':text'),
        log = label;
      if( input.length ) {
        input.val(log);
      } else {
        if( log ) alert(log);
      }
    });

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#img-upload').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0])
      }
    }

    $("#imgInp").change(function(){
      readURL(this);
      $(".caption").show()
      $(".upload").show()
    })

  });


</script>

<style scoped="" lang="css">
  @import "../assets/css/upload.css";
</style>
