<template>
    <div class="detail-container">
        <router-link to="/" class="btn btn-default">Back</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link v-bind:to="'/edit/'+customer.id" class="btn btn-primary">Edit</router-link>

                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button>
            </span>
            
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone"> <strong>  Phone:</strong> </span>{{customer.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> <strong>  E-mail:</strong> </span>{{customer.email}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-flash"> <strong>  Major:</strong> </span>{{customer.major}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-signal"><strong>  Education:</strong></span>{{customer.education}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-wrench"><strong>  Language:</strong></span>{{customer.language}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'detail',
    data:function(){
        return{
            customer:{}
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
        deleteCustomer(id){
            this.$http.delete("http://localhost:3000/users/"+id)
                .then(function(response){
                    console.log(response)
                    this.$router.push({path:"/",query:{alert:"The information has been deleted!"}})
                })
        }

    },
    created(){
        this.fetchCustomer(this.$route.params.id)
    }
}
</script>
<style scoped>
.detail-container{
    margin:2px 5px;
}
.btn{
    margin:0 5px;
}
</style>