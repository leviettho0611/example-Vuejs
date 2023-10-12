<template>
<header>
    <h1>My Website</h1>

    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/other-page" class="nav-link">OtherPage</router-link>
</header>
</template>

  
<style>
header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
}

.nav-link {
  margin-right: 10px;
  text-decoration: none;
  color: red; /* Màu chữ của liên kết */
  font-weight: bold;
  font-size: 20px;
}

/* Định dạng cho liên kết khi rê chuột vào */
.nav-link:hover {
  text-decoration: underline; /* Gạch chân liên kết khi rê chuột vào */
}



h1 {
    font-size: 40px;
}
</style>
