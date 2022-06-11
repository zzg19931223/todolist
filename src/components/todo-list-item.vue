<template>
    <div :style="{ textDecoration: item.complete ? 'line-through' : 'none' }">
        <div class="list-item">
            <span>{{item.content}}</span>
            <el-button size="mini" type="success" icon="el-icon-check" @click="item.complete = true"></el-button>
        </div>
        <el-divider class="styled-divider"></el-divider>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    props: ["item"],
});
</script>

<style>
.list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
}
.styled-divider {
    margin: 12px 0;
}
</style>
