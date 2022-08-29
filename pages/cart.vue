<template>
  <main class="cart container">
    <h2>Your Cart</h2>

    <section v-if="cart.length">
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
           <th>Item</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in cart"
          :key="item.id"
        >
          <td>{{item.item}}</td>
            <td>{{ item.count }}</td>
            <td>${{ item.combinedPrice ? parseInt(item.combinedPrice).toFixed(2) : "00.00"}}</td>
            <td>
                  <v-icon class="cust-icon" @click="deleteItem(item)">mdi-delete</v-icon>
              
            </td>
        </tr>
         <tr>
            <td colspan="3"></td>
            <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
          </tr>
      </tbody>
    </template>
  </v-simple-table>
    
     <v-btn primary>
        <nuxt-link exact to="/gifts">Add More gifts!
        </nuxt-link>
        </v-btn>
    </section>

    <AppEmptyCart v-else />
  </main>
</template>

<script>
import AppEmptyCart from "@/components/AppEmptyCart.vue";
import Swal from 'sweetalert2'
export default {
  components: {
    AppEmptyCart
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  methods:{
     priceFormatting(item) {
      return "$" + item.toFixed(2);
    },
    deleteItem(item){
       Swal.fire({
          title: 'Are you sure?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
             this.$store.commit("removeToCart", item.id);
            Swal.fire("Removed!", "Your item is removed.", "success");
          } 
        })
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
