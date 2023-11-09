<style>
    .textClean{
        text-decoration: none;
    }
</style>
<script>
import { ref } from "vue";

export default {
  name: "customer",
  data() {
    return {
      customers: [],
    };
  },
  methods: {
    async tampilCustomer() {
      try {
        const req = await fetch("http://localhost:3100/api/Customers", {
          methods: "GET",
          header: {
            "Content-Type": "application/json",
          },
        });
        const data = await req.json();
        console.log(data);
        this.customers = data.docs;
      } catch (err) {
        this.errors = err.message;
      }
    },
    async hapusCustomer(id) {
      try {
        const req = await fetch(
          "http://127.0.0.1:3100/api/Customers/"+id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await req.json();
        // console.log(data);
      } catch (err) {
        console.log(err);
        this.errors = err.message;
      }
      this.tampilCustomer();
    },
    
  },
  created() {
    this.tampilCustomer();
  },
};
</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">email</th>
        <th scope="col">Birthday</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody v-if="customers.length > 0" v-for="(customer, index) in customers">
      <tr>
        <th scope="row">{{ customer.id }}</th>
        <td>{{ customer.full_name }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ (new Date(customer.birthday)).toISOString().split('T')[0]}}</td>
        <td>
          <div>
            <button type="button" class="btn btn-danger" @click="hapusCustomer(customer.id)">Hapus</button>
            <!-- <button type="button" class="btn btn-warning" @click="hapusCustomer(customer.id)">Edit</button> -->

            <router-link :to="{ name: 'editData', params: { id: customer.id } }" class="btn btn-outline-warning" >Edit</router-link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
