<template>
  <div id="app">
      <h1>Seis pasos para trabajar con Rutas</h1>
      <router-view></router-view>
      <hr>
      <router-link tag="li" exact to="/"> <a>Inicio</a> </router-link>
      <hr>
      <router-link tag="li" to="/Blog"><a>Blog</a> </router-link>
      <hr>
      <router-link tag="li" to="/Post/123"><a>Post</a> </router-link>
      <hr>
      <router-link tag="li" to="/Post/123232"><a>Post</a> </router-link>

      <hr>
      <h1>holo</h1>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style>
.router-link-active a{
  color:green;
}

</style>
