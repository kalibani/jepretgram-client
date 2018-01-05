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
            <input class="form-control" type="text" placeholder="Write caption... ">
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>

</template>

<script>
$(document).ready( function() {
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

          reader.readAsDataURL(input.files[0]);
      }
  }

  $("#imgInp").change(function(){
      readURL(this);
  });
});
export default {

}

</script>

<style scoped="" lang="css">
  @import "../assets/css/upload.css";
</style>
