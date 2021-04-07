<template>
  <div id="app">
      <h1>Seis pasos para trabajar con Rutas</h1>
      <router-view></router-view>
      <hr>
      <router-link to="/"> Inicio</router-link>
      <hr>
      <router-link to="/Blog">Blog</router-link>

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

</style>
