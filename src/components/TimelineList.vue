<script setup>
import modifier from "../helper/modifier";
import TimelineItem from "./TimelineItem.vue";
import { onMounted } from "vue";
import AOS from "aos";

// Mounting AOS package on Mounted
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="">
    <TimelineItem
      v-for="item in modifier"
      :key="item._id"
      :modifier="item"
      data-aos="zoom-in"
    />
  </div>
</template>
