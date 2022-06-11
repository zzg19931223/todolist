<template>
    <el-card class="todo-list">
        <div slot="header" class="add-action-bar">
            <el-input size="mini" v-model="todocontent"></el-input>
            <el-button type="primary" @click="onAdd" size="mini">add</el-button>
        </div>
        <list-item v-for="item in list" :item="item" :key="item.content"></list-item>
    </el-card>
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
        todocontent: ""
        };
    },
    methods: {
        onAdd() {
            if(!this.todocontent) return
            this.list.push({
                content: this.todocontent,
                complete: false 
            })
            this.todocontent = ""
        },
    }
});
</script>

<style>
.todo-list {
    width: 400px;
    max-width: 80vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 400px;
}
.add-action-bar {
    display: flex;
}
.add-action-bar .el-input {
    flex: 1;
    margin-right: 10px;
}
</style>
