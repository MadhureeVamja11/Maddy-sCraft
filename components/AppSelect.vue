<template>
  <div>
    <label :for="select">Choose a {{ select }}:</label>
    <v-select :items="selectoptions" label="--Please choose--" solo @change="$emit('change', $event)"
      :id="select"></v-select>
    <!-- <select @change="$emit('change', $event.target.value)" :name="select" :id="select">
      <option value>--Please choose--</option>
      <option v-for="option in selectoptions" :key="option" :value="option">
        {{
        option
        }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "gift type",
    },
    selectoptions: {
      type: Array,
      default: () => ["--Please choose--","Scrapbook", "Gift Boxes"],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
