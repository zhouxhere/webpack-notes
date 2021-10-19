<template>
  <div id="root">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#root {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
