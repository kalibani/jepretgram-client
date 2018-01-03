<template>
  <div class="container">
    <div class="row">
      <div class="title-logo">
        <h1>Welcome To Jepret-Gram</h1>
        <img class="displayed" src="../assets/image/New-Instagram-Icon-3.png" alt="">
      </div>
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
                <a href="#" class="active" id="login-form-link">Login</a>
              </div>
              <div class="col-xs-6">
                <a href="#" id="register-form-link">Register</a>
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" v-on:submit.prevent="doLogin" role="form" style="display: block;">
                  <div class="form-group">
                    <input type="email" name="email" tabindex="1" class="form-control" v-model="login.email" placeholder="Email" value="">
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" tabindex="2" class="form-control" v-model="login.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" v-on:submit.prevent="doRegister" role="form" style="display: none;">
                  <div class="form-group">
                    <input type="text" name="first_name" id="first_name" tabindex="1" class="form-control" v-model="register.first_name" placeholder="First Name" value="">
                  </div>
                  <div class="form-group">
                    <input type="text" name="last_name" id="last_name" tabindex="1" class="form-control" v-model="register.last_name"placeholder="Last Name" value="">
                  </div>
                  <div class="form-group">
                    <input type="email" name="email" tabindex="1" class="form-control" v-model="register.email" placeholder="Email Address" value="">
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" tabindex="2" class="form-control" v-model="register.password" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      register: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin() {
      var self = this
      this.$http.post('/login',{
        email: self.login.email,
        password: self.login.password
      }).then((response) => {
        localStorage.setItem("token", response.data.token)
      }).catch((err) => {
        console.log(err);
      })

    },

    doRegister(){
      var self = this
      this.$http.post('/register',{
        first_name: self.register.first_name,
        last_name: self.register.last_name,
        email: self.register.email,
        password: self.register.password
      }).then((response) => {
        alert('Sukses Register');
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="" lang="css">
  @import "../assets/css/loginregister.css";
</style>
