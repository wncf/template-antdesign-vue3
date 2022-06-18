<script setup>
import { ref } from "vue";
import { GlobalAntConfigProps } from "~/config/Static_config";
</script>
<template>
  <a-config-provider v-bind="GlobalAntConfigProps">
    <router-view></router-view>
  </a-config-provider>
</template>

<style></style>
