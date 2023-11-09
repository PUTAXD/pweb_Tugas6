<script>
import { ref } from "vue";

export default {
  name: "AddContact",
  data() {
    return {
      name: ref(""),
      email: ref(""),
      birthDay: ref(""),
      errors: ref(""),
    };
  },
  methods: {
    async tambahCustomer() {
      try {
        const req = await fetch("http://127.0.0.1:3100/api/Customers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: this.name,
            email: this.email,
            birthday: this.birthDay,
          }),
        });
        const data = await req.json();
        console.log(data);
        if (req.ok) this.$router.push({ path: "/" });
        else this.errors = data.errors[0].message;
      } catch (err) {
        this.errors = err.message;
      }
    },
  },
  
};
</script>

<template>
    <form v-on:submit.prevent="tambahCustomer">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
    
  </div>
  <div class="mb-3">
    <label for="fullname" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="fullname" v-model="name">
   
  </div>
  <div class="mb-3">
    <label for="birthday" class="form-label">BirthDay</label>
    <input type="date" class="form-control" id="birthday" v-model="birthDay" >
   
  </div>
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>
</template>