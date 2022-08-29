<template>
  <main class="container">
    <section class="image" style="width: 800px;">
      <v-carousel :show-arrows="false">
        <v-carousel-item v-for="(item, i) in currentItem.img" :key="i" eager>
          <v-img :src="`${protocol}/${item}`" eager min-height="400"></v-img>
        </v-carousel-item>
      </v-carousel>
    </section>

    <section class="details">
      <v-card class="mx-auto my-12">
        <v-card-title>{{ currentItem.item }}</v-card-title>
        <v-card-text>
          <div class="my-4 text-subtitle-1">
            Price: {{ priceFormatting(currentItem.price) }}
          </div>
          <v-form ref="form" class="mx-2 ">
            <v-row>
              <v-col>
                <v-text-field outlined type="number" v-model="count" min="1"></v-text-field>
              </v-col>
              <v-col>
                <v-btn class="purple darken-2 white--text mt-8" @click="addToCart">
                  Add to Cart - ${{ combinedPrice }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-title>Description</v-card-title>

        <v-card-text>
          <div>{{ currentItem.description }}</div>
        </v-card-text>
      </v-card>

      <v-alert mdiVuetify v-if="cartSubmitted" type="success" class="color"> &nbsp;Order Added! Return to
        <nuxt-link to="/gifts">gifts</nuxt-link>
      </v-alert>
      <!-- <app-toast v-if="cartSubmitted">
        Order Added!
        <br />Return to
        <nuxt-link to="/restaurants">restaurants</nuxt-link>
      </app-toast>

       <app-toast v-if="errors">
        Please select options and
        <br />addons before continuing
      </app-toast> -->
    </section>

    <!-- <section class="options">
      <v-card class="mx-auto my-12" max-width="374">
        <v-card-title>Description</v-card-title>
        <v-card-text>{{ currentItem.description }}
        </v-card-text>
      </v-card>
    </section> -->
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {

  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemSizeAndCost: [],
      cartSubmitted: false,
      errors: false,
      host: window.location.hostname,
      protocol: window.location.protocol
    };
  },
  computed: {
    ...mapState(["itemdata"]),
    currentItem() {
      // more efficient than forEach because we can break
      let result;

      for (let i = 0; i < this.itemdata.length; i++) {
        for (let j = 0; j < this.itemdata[i].menu.length; j++) {
          if (this.itemdata[i].menu[j].id === this.id) {
            result = this.itemdata[i].menu[j];
            break;
          }
        }
      }

      return result;
    },
    combinedPrice() {
      let total = this.count * this.currentItem.price;
      return total.toFixed(2);
    }
  },
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2);
    },
    addToCart() {
      let formOutput = {
        item: this.currentItem.item,
        count: this.count,
        combinedPrice: this.combinedPrice,
      };
      this.cartSubmitted = true;
      this.$store.commit("addToCart", formOutput);

    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}

.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}

.options {
  grid-area: 2 / 1 / 3 / 2;
  margin-top: 10px;
}

.min-height {
  height: 40px !important;
}

.mt-8 {
  margin-top: 7px !important;
}

.color{
  background-color: green !important;
  color: white !important;
}
</style>
