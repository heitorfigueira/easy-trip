<template>
  <v-container class="fill-height" fluid>
    <div class="background text-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>
<style lang="scss" scoped>
  .background {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.1);
    z-index: 999999;
  }
</style>