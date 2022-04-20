<script setup>
import { defineProps } from "vue";
const props = defineProps({
  modifier: {
    type: Object,
    default: {},
  },
});

// Classes for tags
const classes = {
  0: "green",
  1: "yellow",
  2: "red",
};
</script>

<template>
  <!-- One occation item -->
  <div class="occation">
    <!-- Occation left side time -->
    <div class="occation-time">
      <span> {{ modifier.registered }} </span>
      <div class="line"></div>
    </div>

    <!-- Occation right side body -->
    <div class="occation-body">
      <h2 class="occation-body__title">
        {{ modifier.name.first }} {{ modifier.name.last }}
      </h2>
      <p class="occation-body__info">{{ modifier.about.slice(0, 170) }}...</p>
      <div class="occation-body__tags">
        <span
          class="tag"
          :class="classes[index]"
          v-for="(item, index) in modifier.tags"
          :key="index"
        >
          #{{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// Occation style
.occation {
  display: flex;
  gap: 18px;
  padding-bottom: 16px;

  &-time {
    display: flex;
    width: 96px;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    span {
      color: #8d8d8d;
      font-weight: 500;
    }
  }

  &-body {
    width: 300px;
    padding: 12px 18px;
    border-radius: 18px;
    background: white;

    &__title {
      font-size: 20px;
      margin-bottom: 6px;
    }

    &__info {
      color: #959595;
    }

    &__tags {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }

      .tag {
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        flex-shrink: 0;
      }
    }
  }
}

// Tags badges colors
.green {
  background: #f0fbf3;
  color: #7ddb8c;
}

.yellow {
  background: #fffbeb;
  color: #fbd467;
}

.red {
  background: #fdeeea;
  color: #fe4538;
}

// Media for responsive
@media (max-width: 500px) {
  .occation {
    flex-direction: column;
    gap: 0;
    padding: 16px 0 20px;

    &-body {
      width: 100%;
    }
  }
}
</style>
