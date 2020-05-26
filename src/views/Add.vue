<template>
  <div class="add-container">
    <h1 class="page-header">Add Student</h1>
    <Alert v-bind:message="alert" v-if="alert" ></Alert>
    <form @submit="addCustomer" role="form">
        <h3>Information</h3>
        <div class="input-group">
          <label>Name</label>
          <input type="text" v-model="customer.name" class="form-control" placeholder="Enter student's name" aria-describedby="basic-addon1">
        </div>
         <div class="input-group">
          <label>E-mail</label>
          <input type="text" v-model="customer.email" class="form-control" placeholder="@example.com" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
          <label>Phone</label>
          <input type="text" v-model="customer.phone" class="form-control" placeholder="Student's phone number" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
           <label>Major</label>
          <input type="text" v-model="customer.major"  class="form-control" placeholder="eg. Computer Science" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
          <label>Education</label>
          <input type="text"  v-model="customer.education" class="form-control" placeholder="Highest academic" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
          <label>Language</label>
          <input type="text" v-model="customer.language" class="form-control" placeholder="The programming language" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
          <label>Profile</label>
          <textarea class="form-control" rows="5" cols="100" placeholder="Introduce this student brievely" aria-describedby="basic-addon1"></textarea>
        </div>
      
        <span><button type="submit" class="btn btn-primary">Add</button></span>
    </form>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from "@/components/Alert.vue"

export default {
  name: 'Add',
  data:function(){
    return{
      customer:{},
      alert:''
    }
  },
  methods:{
    addCustomer(e){
      if(!this.customer.name||!this.customer.major||!this.customer.education||!this.customer.language){
        //alert("Please check your submit")
        this.alert="Please check your submit"
      }else{
        let newCustomers={
          name:this.customer.name,
          major:this.customer.major,
          education:this.customer.education,
          language:this.customer.language,
          phone:this.customer.phone,
          email:this.customer.email,
          profile:this.customer.profile
        }
        this.$http.post("http://localhost:3000/users",newCustomers)
            .then(function(response){
              console.log(response);
              this.$router.push({path:"/",query:{alert:"The new information has been successfully added"}})
            })
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components:{
    Alert
  }
}
</script>
<style scoped>
.add-container{
  margin:0 20px;
}
.btn{
  margin:10px;
}
.input-group{
  margin:20px 0;
}

</style>


