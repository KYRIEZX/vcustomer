<template>
  <div class="home-container">
    <h1 class="page-head">Student Management System</h1>
    <Alert v-bind:message="alert" v-if="alert"></Alert>
    <Student></Student>
    <router-link to="/add" id="link" class="btn btn-primary">Add New Students Here</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Student from "@/components/students.vue"
import Alert from "@/components/Alert.vue"

export default {
  name: 'Home',
  data:function(){
    return{
      alert:''
    }
  },
  components: {
    Student,
    Alert
  },
  created(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
    }
  },
  updated(){
    
  }
}
</script>
<style scoped>
.home-container{
  margin:0 25px;
}
#link{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  color:aliceblue;
  font-size:1.5em;
  margin:0 35%;
}

</style>
