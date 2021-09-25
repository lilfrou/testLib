<template>
<div>
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'test' }">test</router-link>
      <router-view />
  <h1>Oops, it looks like the page you're looking for doesn't exist.</h1>
  </div>
</template>