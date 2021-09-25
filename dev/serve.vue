<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { LibfirasSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  LibfirasSample,
  // }
});
</script>

<template>
  <div id="app">
    <router-link :to="{ name: 'Home' }">Home</router-link> 
    <router-link :to="{ name: 'test' }">test</router-link>
      <router-view />

  </div>
</template>
