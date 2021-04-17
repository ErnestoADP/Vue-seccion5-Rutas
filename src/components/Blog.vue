<template>
    <div>
            <h3 v-alerta="45">Blog</h3>
            <p>Tristes guerras<br>
si no es amor la empresa.<br>
Tristes. Tristes.</p>

<p>Tristes armas<br>
si no son las palabras.<br>
Tristes. Tristes.</p>

<p>Tristes hombres<br>
si no mueren de amores.<br>
Tristes. Tristes.</p>

<button @click="volverInicio">Volver</button>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        methods: {
            volverInicio(){
                this.$router.push('/', console.log('as vuelto') )
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
