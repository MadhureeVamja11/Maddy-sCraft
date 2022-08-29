<template>
      <v-toolbar  dark class="hidden-xs-and-down">
        <v-toolbar-title>Maddy's Craft</v-toolbar-title>
        <v-toolbar-items>
          <v-btn text>
        <nuxt-link exact to="/">
          <v-icon class="cust-icon" >mdi-home</v-icon>
        </nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link exact to="/gifts">
          <v-icon class="cust-icon">mdi-gift</v-icon>
        </nuxt-link>
      </v-btn>
      <v-btn text>
        <nuxt-link exact to="/galary">
          <v-icon class="cust-icon">mdi-image-album</v-icon>
        </nuxt-link>
      </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>
          <v-toolbar-items>
      <v-btn text>
        <nuxt-link exact to="/cart">
             <v-badge
           class="color"
          :content="cartCount"
        >
          <v-icon class="cust-icon">mdi-cart</v-icon></v-badge>
        </nuxt-link>
      </v-btn>
    </v-toolbar-items>
      </v-toolbar>
  
  <!-- <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gifts">Gifts</nuxt-link>
      </li>
    </ul>
       <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style lang="scss" scoped>
.cust-icon{
  color: white !important;
  display: block !important;
}

// .color{
//   color: white !important;
//   background-color: red !important;
// }
</style>
