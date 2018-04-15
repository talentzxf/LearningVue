<template>
  <div id="harmony_container">
    <div v-for="db in db_defs">
      <harmony-db v-bind:db_name='db.name'></harmony-db>
    </div>
  </div>
</template>
<script>
import HarmonyDB from '@/components/HarmonyDB'
export default {
  name: 'HarmonyContainer',
  components: {
    'harmony-db' : HarmonyDB
  },
  data () {
    return {
      db_defs:
      [
      { name: 'C01DB01' },
      { name: 'C02DB01' },
      { name: 'C03DB01' },
      { name: 'C04DB01' },
      { name: 'C05DB01' }
      ]
    }
  }
}
</script>
<style scope>
#harmony_container{
border: solid red;
width: 500px;
display: inline;
float: left
}
</style>
