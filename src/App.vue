<template>
  <div id="app">
      <h1>Seis pasos para trabajar con Rutas</h1>
      <router-view></router-view>
      <hr>
      <router-link tag="li" exact to="/"> <a>Inicio</a> </router-link>
      <hr>
      <router-link tag="li" to="/Blog"><a>Blog</a> </router-link>

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
