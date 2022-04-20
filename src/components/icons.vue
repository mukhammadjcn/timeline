<script>
export default {
  props: ["icon"],
};
</script>

<template>
  <!-- Date icon -->
  <svg
    v-if="icon == 'date'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5"
      y="5.4516"
      width="15"
      height="15.4839"
      rx="4"
      stroke="#565656"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    <path
      d="M5.29034 10.2903H19.8065"
      stroke="#565656"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M16.4194 4V6.90323"
      stroke="#565656"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M9.16129 4V6.90323"
      stroke="#565656"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <circle cx="8.72581" cy="13.4355" r="0.725806" fill="#565656" />
    <circle cx="12.5968" cy="13.4355" r="0.725806" fill="#565656" />
    <circle cx="16.4678" cy="13.4355" r="0.725806" fill="#565656" />
    <circle cx="8.72581" cy="17.3064" r="0.725806" fill="#565656" />
    <circle cx="12.5968" cy="17.3064" r="0.725806" fill="#565656" />
    <circle cx="16.4678" cy="17.3064" r="0.725806" fill="#565656" />
  </svg>
</template>
