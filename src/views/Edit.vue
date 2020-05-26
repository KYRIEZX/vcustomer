<template>
     <div class="edit-container">
    <h1 class="page-header">Edit Student</h1>
    <Alert v-bind:message="alert" v-if="alert" ></Alert>
    <form @submit="editCustomer" role="form">
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
      
        <span><button type="submit" class="btn btn-primary">Update</button></span>
    </form>
    
  </div>
</template>
<script>
import Alert from "@/components/Alert.vue"
export default {
    name:'edit',
    data:function(){
    return{
      customer:{},
      alert:''
    }
  },
  methods:{
      fetchCustomer(id){
            this.$http.get("http://localhost:3000/users/"+id)
                .then(function(response){
                    //console.log(response)
                    this.customer=response.body;
                })
      },
      editCustomer(e){
        if(!this.customer.name||!this.customer.major||!this.customer.education||!this.customer.language){
        //alert("Please check your submit")
            this.alert="Please check your submit"
        }
        else{
        let updateCustomers={
          name:this.customer.name,
          major:this.customer.major,
          education:this.customer.education,
          language:this.customer.language,
          phone:this.customer.phone,
          email:this.customer.email,
          profile:this.customer.profile
        }
        this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomers)
            .then(function(response){
              console.log(response);
              this.$router.push({path:"/",query:{alert:"The information has been successfully edited!"}})
            })
        e.preventDefault();
      }
      e.preventDefault();
    } 
  },
  components:{
      Alert
  },
  created(){
         this.fetchCustomer(this.$route.params.id)
    }

}
</script>
<style scoped>
.edit-container{
  margin:0 20px;
}
.btn{
  margin:10px;
}
.input-group{
  margin:20px 0;
}

</style>