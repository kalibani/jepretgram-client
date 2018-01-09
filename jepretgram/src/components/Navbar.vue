<template lang="html">
  <div>
    <nav class="navbar navbar-findcond navbar-fixed-top">
      <div class="container">
    		<div class="collapse navbar-collapse" id="navbar">
          <router-link :to="{ name: 'Home' }">
            <a class="navbar-brand">
              <i class="glyphicon glyphicon-home"></i> | <strong>Jepret-Gram</strong>
            </a>
          </router-link>
    			<ul class="nav navbar-nav navbar-right">
              <router-link :to="{ name: 'Profile', params: { userId: user.userId} }">
                <a class="navbar-brand">
                  <i class="fa fa-user fa-lg"></i>
                </a>
              </router-link>
              <router-link to="/">
                <a class="navbar-brand" @click="signOut">
                  <i class="fa fa-sign-out fa-md" aria-hidden="true">Sign Out</i>
                </a>
              </router-link>
    			</ul>
    			<form class="navbar-form search-form" role="search" id="search">
    				<input type="text" class="form-control" placeholder="Search" />
    			</form>
    		</div>
    	</div>
    </nav>
  </div>
</template>

<script>
export default {
  props:['user'],
  methods:{
    signOut(){
      localStorage.removeItem('token')
      location.reload()
    }
  }

}
</script>

<style lang="css">
  @import "../assets/css/navbar.css";
</style>
