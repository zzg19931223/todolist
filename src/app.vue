<template>
    <div>
        <todo-list />
    </div>
</template>

<script>
import TodoList from "./components/todo-list.vue";
import Vue from "vue";

export default Vue.extend({
    components: { TodoList },
});
</script>
