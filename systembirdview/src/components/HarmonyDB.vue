<template>
  <div id="harmony_db">
    <img src="../assets/logo.png">
    <div> {{ db_name }} </div>
  </div>
</template>
<script>
export default {
  name: 'HarmonyDB',
  props: ['db_name']
}
</script>
<style scope>
#harmony_db{
border: solid blue;
display: inline;
width: auto;
float: left;
clear: both
}

#harmony_db img{
width: 40px;
margin: 0px;
padding: 0px;
border: 0px;
display: inline-block;
float: left;
clear: both;
}
</style>
