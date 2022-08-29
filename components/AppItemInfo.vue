<template>
  <section class="restaurantinfo">

    <div v-for="store in datasource" :key="store.id">
       <v-toolbar-title ><b>{{store.name}}</b></v-toolbar-title>
        <v-card-actions class="pa-4">
    Delivery Time
      <span class="grey--text text--lighten-2 text-caption mr-2">
         &nbsp; ({{ store.deliveryTime }})
      </span>
      <!-- <p>Rating {{ store.rating }}</p> -->
     </v-card-actions>

       <v-card-actions class="pa-4">
      Rate this album 
      <span class="grey--text text--lighten-2 text-caption mr-2">
         &nbsp; ({{ store.rating }})
      </span>
      <!-- <p>Rating {{ store.rating }}</p> -->
     <v-rating
      background-color="orange lighten-3"
      v-model="store.rating"
      color="orange"
      half-increments
      large
      readonly
    ></v-rating>
    </v-card-actions>
      <v-chip v-if="store.freeDelivery" class="ma-2 color-red" text-color="white">
        Free Delivery
      </v-chip>
      <!-- <v-chip v-if="store.freeDelivery" color="red">Free Delivery</v-chip> -->

      <v-row>
        <v-card v-for="menuitem in store.menu" :key="menuitem.id" class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="menuitem.img[0]" class="items"></v-img>
          <v-card-title>{{ menuitem.item }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">
              {{ priceFormatting(menuitem.price) }}
            </div>

            <div>{{ menuitem.description }}</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="`item/${menuitem.id}`">
            <AppButton>
              View Item
            </AppButton>
              <!-- <v-btn class="ghost" text>
                View Item
              </v-btn> -->
            </nuxt-link>
            <v-spacer></v-spacer>
            <v-btn outlined @click="addToCart(menuitem)">Add to cart</v-btn>
          </v-card-actions>
        </v-card>

      </v-row>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
  components:{
    AppButton
  },
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2);
    },
    addToCart(item){
       let formOutput = {
        item: item.item,
        count: 1,
        combinedPrice:item.price,
      };
      this.$store.commit("addToCart", formOutput);
    }
  },
};
</script>

<style lang="scss" scoped>
.color-red {
  background-color: red !important;
}

</style>
