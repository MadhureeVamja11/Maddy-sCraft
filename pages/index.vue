<template>
<v-main>
  <AppHeader/>
      <AppItemInfo  :datasource="itemdata" />
</v-main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppItemInfo from "@/components/AppItemInfo.vue";
export default {
  name: 'IndexPage',
  components :{
    AppHeader,
    AppItemInfo,
},
  computed: {
    itemdata() {
      return this.$store.state.itemdata;
    },
  },
}
</script>
