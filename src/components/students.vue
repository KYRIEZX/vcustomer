<template>
  <div>
      <div><input type="text" class="form-control" v-model="keyword" placeholder="Search student you want to find"></div>
      <table class="table">
          <thead>
          <tr>
              <th>Name</th>
              <th>Major</th>
              <th>Education</th>
              <th>Language</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(customer,index) in search(keyword)" v-bind:key="index">
              <td>{{customer.name}}</td>
              <td>{{customer.major}}</td>
              <td>{{customer.education}}</td>
              <td>{{customer.language}}</td>
              <td><router-link v-bind:to="'/student/'+customer.id" class="btn btn-info">Detail</router-link></td>
          </tr>
          </tbody>
      </table>
  </div>
   
</template>

<script>
export default {
  name: 'students',
  data:function(){
      return {
          customers:[],
          keyword:''
      }
  },
  methods:{
      fetchCustomers(){
          this.$http.get("http://localhost:3000/users")
              .then(function(res){
                  //console.log(res)
                  this.customers=res.body
                })
      },
      search(k){
          return this.customers.filter(function(customer){
              return customer.name.toLowerCase().includes(k.toLowerCase());
          })
      }
  },
  created(){
      this.fetchCustomers();
  },
  updated(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin-top:30px;
    }
    td{
        text-align: left;
    }
    td a{
        font-weight:bold;
    }
</style>
