<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 35px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.16);
  padding: 30px;
  width: 100%;
  background-color: white;
}
</style>
