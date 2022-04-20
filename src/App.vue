<script setup>
import modifier from "./helper/modifier";
import Icons from "./components/icons.vue";
import TimelineList from "./components/TimelineList.vue";

// Getting first date of data
const firstDate = modifier[0].registered;
</script>

<template>
  <div class="container">
    <div class="main">
      <!-- Header -->
      <header class="header">
        <div class="header__logo">
          <Icons icon="date" />
          <div class="line"></div>
        </div>
        <span
          >Beginning: <br />
          {{ firstDate }}</span
        >
      </header>

      <!-- Timeline list -->
      <TimelineList />
    </div>
  </div>
</template>

<style lang="scss">
// Inital values equal to 0
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration-line: none;
  transition: 0.3s ease-in-out;
}

// Some defoult styles
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #565656;
}

// Line style
.line {
  height: 100%;
  width: 2px;
  background: #cecece;
  margin: 8px 0;
  border-radius: 8px;
}

// Container
.container {
  padding: 120px 64px;
  background: #f3f4f6;

  .header {
    display: flex;
    align-items: top;
    gap: 18px;

    svg {
      width: 36px;
      height: 36px;
      flex-shrink: 0;
    }

    span {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 64px;
    }

    &__logo {
      width: 96px;
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-shrink: 0;
    }
  }

  .main {
    max-width: 420px;
    margin: auto;
  }
}

// Media for responsive
@media (max-width: 500px) {
  .container {
    padding: 60px 24px;

    .header {
      &__logo {
        width: auto;
      }
      span {
        font-size: 28px;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
