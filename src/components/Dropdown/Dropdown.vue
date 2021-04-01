<template>
  <div class="menu-item">
    <a href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 683" width="10">
      <path d="M1017" fill="#f3f3f3"></path>
    </svg>
    <div class="sub-menu">
      <div v-for="(item, i) in items" :key="i" class="menu-item">
        <a :href="item.link">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["title", "item"],
};
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}
</style>
