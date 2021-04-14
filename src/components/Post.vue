<template>
    <div>
            <h1>Recepcion del parametro de la ruta</h1>
            <p>{{id}}</p>     
    </div>
</template>

<script>
    export default {
        name: 'Post',
            data(){
                const {id} = this.$route.params
                return{
                    id,

                }

            },
         watch: {
                '$route'(to){
                    this.id = to.params.id
                }

         }   



    }
</script>

<style lang="scss" scoped>

</style>