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
    <libfiras-sample />
  </div>
</template>
