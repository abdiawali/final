<template>
  <div id="app">
    
    <nav>
      <img src="./assets/track-logo.png">
      
      <router-link to="/">Update</router-link>
      <router-link to="/RecordTable">Record</router-link>
    </nav>
    <router-view />
  <!-- <RecordForm></RecordForm>
  <RecordTable></RecordTable> -->

  </div>
</template>

<script>
//import RecordForm from './components/RecordForm'
//import RecordTable from './components/RecordTable'

export default {
  name: 'app',
  data() {
    return {
      records: [],

    }
  },
  components: {
    //RecordForm,
    //RecordTable
  },
  mounted() {
    //this.updateRecords()
  },
  methods: {

  }
}
</script>

<style>
nav {
  padding: 80px 200px 20px 0;
  background-image: url(assets/time.jpg);
  background-size: 300px 200px;
  position:unset; left:80px; top:20px
}
nav a {
  padding: 20px;
  font-size: 28px;
  text-decoration:none;
  background:none;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  margin-right: 15px;
  
}
</style>