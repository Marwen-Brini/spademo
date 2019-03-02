<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="card card-default col-12">
                <link rel="stylesheet" href="">
                <div class="card-header">
                    <h3 class="card-title">Users</h3>
                    <div class="card-tools">
                        <button data-toggle="modal" data-target="#newUser" class="btn btn-success" title="create new User"><i class="fas fa-user-plus"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-stripped">
                        <thead>
                            <th>id</th>
                            <th>photo</th>
                            <th>name</th>
                            <th>email</th>
                            <th>type</th>
                            <th>registed at</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="u in users">
                                <td>{{u.id}}</td>
                                <td><img :src="u.photo" alt="" class="img"></td>
                                <td>{{u.name | UCfirst}}</td>
                                <td>{{u.email}}</td>
                                <td>{{u.type | UCfirst}}</td>
                                <td>{{u.created_at | myDate}}</td>
                                <td><a href="javascript:void(0)" class="btn btn-sm btn-warning mr-2" title="Edit">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="javascript:void(0)" class="btn btn-sm btn-danger" @click="deleteUser(u.id)" title="delete">
                                        <i class="fa fa-trash" ></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="newUser" tabindex="-1" role="dialog" aria-labelledby="newUserLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="newUserLabel">Add New</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <form @submit.prevent="createUser">
      <div class="modal-body">
            <div class="form-group">
              <input v-model="form.name" type="text" name="name"
                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Name">
              <has-error :form="form" field="name"></has-error>
            </div>
            <div class="form-group">
              <input v-model="form.email" type="email" name="email"
                class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" placeholder="Email Address">
              <has-error :form="form" field="email"></has-error>
            </div>
            <div class="form-group">
              <input v-model="form.password" type="password" name="password"
                class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" placeholder="password">
              <has-error :form="form" field="password"></has-error>
            </div>
            <div class="form-group">
              <textarea v-model="form.bio" name="bio"
                class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }" placeholder="bio"></textarea>
              <has-error :form="form" field="bio"></has-error>
            </div>
            <div class="form-group">
              <select v-model="form.type" type="password" name="type"
                class="form-control" :class="{ 'is-invalid': form.errors.has('type') }" placeholder="type">
                    <option value="admin">Admin</option>
                    <option value="user" selected>user</option>
                </select>
              <has-error :form="form" field="type"></has-error>
            </div>
            <!-- <div class="form-group">
              <input v-model="form.photo" type="text" name="photo"
                class="form-control" :class="{ 'is-invalid': form.errors.has('photo') }" placeholder="photo">
              <has-error :form="form" field="photo"></has-error>
            </div> -->
      </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal"><strong>Cancel</strong></button>
            <button type="submit" class="btn btn-primary btn-sm"><strong>Save User</strong></button>
          </div>
        </form>
    </div>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: new Form({
                    name:'',
                    email:'',
                    password:'',
                    type:'',
                    bio:'',
                    photo:''
                }),
                users:[],
            };
        },
        methods:{
            createUser(){
                axios.post('/api/users',this.form).then(()=>{
                    $("#newUser").modal('hide');
                    Toast.fire({
                      type: 'success',
                      title: 'Signed in successfully'
                    });
                    this.$router.push('/users');
                }).catch((err)=>{
                    Toast.fire({
                      type: 'error',
                      title: 'error'
                    });
                    this.$router.push('/dashboard');

                });

            },
            deleteUser(id){
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.value) {
                    axios.delete(`api/users/${id}`).then(()=>{
                        Toast.fire({
                          type: 'success',
                          title: "User Deleted successfully"
                        })
                    }).catch((err)=>{
                        Toast.fire({
                          type: 'error',
                          title: "something went wrong! user was not deleted"
                        })

                    });
                  }
                });
                
            }
        },
        created() {
            this.$Progress.start()
            axios.get('api/users').then((resp)=>{this.users=resp.data.users.data;});
          axios.get('api/users').then((resp)=>{console.log(resp.data.users);});
        },
        mounted(){
                this.$Progress.finish();
                
        }
    }
</script>
