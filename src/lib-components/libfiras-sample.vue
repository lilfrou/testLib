<template>
<div>
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'test' }">test</router-link>
      <router-view />

  <h1>Home.</h1>
  </div>
</template>