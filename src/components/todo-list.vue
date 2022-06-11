<template>
  <div>
    <div>todolist</div>
    <list-item v-for="item in list" :item="item"></list-item>
  </div>
</template>

<script>
import Vue from "vue";
import ListItem from "./todo-list-item.vue";

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      list: [],
    };
  },
});
</script>
