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
                <form id="login-form" v-on:submit.prevent="doLogin(login).then(clear)" role="form" style="display: block;">
                  <div class="form-group">
                    <input type="text" name="email" tabindex="1" class="form-control" v-model="login.email || login.username" placeholder="Email/username" value="" required>
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" tabindex="2" class="form-control" v-model="login.password" placeholder="Password" required>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" v-on:submit.prevent="doRegister(register).then(clear)" role="form" style="display: none;">
                  <div class="form-group">
                    <input type="email" name="email" id="email" tabindex="1" class="form-control" v-model="register.email" placeholder="email" required>
                  </div>
                  <div class="form-group">
                    <input type="text" name="username" id="username" tabindex="1" class="form-control" v-model="register.username"placeholder="username" required>
                  </div>
                  <div class="form-group">
                    <input type="password" name="password" tabindex="1" class="form-control" v-model="register.password" placeholder="password" required>
                  </div>
                  <div class="form-group">
                    <input type="fullname" name="fullname" tabindex="2" class="form-control" v-model="register.fullname" placeholder="Fullname" required>
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
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      login: {
        email: '',
        username: '',
        password: ''
      },
      register: {
        email: '',
        username: '',
        password: '',
        fullname: ''
      }
    }
  },
  beforeCreate(){
    let token = localStorage.getItem('token')
    if (token) {
      this.$router.push('/home2')
    }else {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions([
      'doLogin',
      'doRegister'
    ]),

    clear(){
      this.register = {},
      this.login = {}
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="" lang="css">
  @import "../assets/css/loginregister.css";
</style>
