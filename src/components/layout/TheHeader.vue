<template>
  <header>
    <h1>{{ pageName }}</h1>
    <div>
      <input type="text" placeholder="Search.." />
      <img src="../../assets/avatar-images/niki-avatar.png" />
    </div>
  </header>
</template>

<script>
export default {
  props: ["pageName"],
};
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.16);
}

h1 {
  margin: 0;
}
</style>
