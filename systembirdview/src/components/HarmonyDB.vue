<template>
  <div id="harmony_db">
    <img src="../assets/logo.png">
    {{ db_name }}
  </div>
</template>
<script>
export default {
  name: 'HarmonyDB',
  props: ['db_name'],
  data () {
    return {
      msg: 'C01DB01'
    }
  }
}
</script>
<style scope>
#harmony_db{
border: solid blue
}


#harmony_db img{
height:5%;
width: 5%
}
</style>
