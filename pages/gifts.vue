<template>
  <main class="restaurant">
      
          <div class="restaurantheading">
            <h1>Gift Items</h1>

            <app-select @change="selectItem = $event" :selectoptions="ItemOptions" />
          </div>

          <AppItemInfo :datasource="filterdItems" />
  </main>
</template>

<script>
import AppItemInfo from "@/components/AppItemInfo.vue";
import AppSelect from "@/components/AppSelect.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppSelect,
    AppItemInfo: () =>
      import(/* webpackPrefetch: true */ "@/components/AppItemInfo.vue"),
  },
  data() {
    return {
      selectItem: "",
      ItemOptions: ["--Please choose--","Scrapbook", "Gift Boxes"],
    };
  },
  computed: {
    ...mapState(["itemdata","images"]),
    filterdItems() {
      if (this.selectItem && this.selectItem != "--Please choose--") {
        return this.itemdata.filter((el) => {
          console.log(el);
          let name = el.name.trim();
          return name.includes(this.selectItem);
        });
      }
      return this.itemdata;
    },
  },
 


};
</script>

<style lang="scss" scoped>
</style>
