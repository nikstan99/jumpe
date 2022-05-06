<template>
  <header>
    <div class="logo">
      <router-link to="/"
        ><img alt="Vue logo" src="../../assets/jumpe-logo-white.svg"
      /></router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="schedule">Schedule</router-link></li>
        <li><router-link to="grades">Grades</router-link></li>
        <li><router-link to="exams">Exams</router-link></li>
      </ul>
    </nav>
    <div>
      <!-- classes -->
    </div>
    <div>
      <!-- info buttons -->
    </div>
  </header>
</template>

<style scoped>
header {
  flex-basis: 17rem;
  flex-grow: 1;
  height: 100vh;
  background-color: #5a45aa;
  padding: 35px 30px;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

li {
  width: 100%;
  margin: 7px;
}

header a {
  text-decoration: none;
  color: #ffffff;
  width: inherit;
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  transition: all 0.3s;
}

a:active,
a:hover,
a.router-link-active {
  background-color: #fb6d3b;
}

.logo a:active,
.logo a:hover,
.logo a.router-link-active {
  background-color: unset;
}
</style>
