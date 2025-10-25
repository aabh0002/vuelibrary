<template>
  <div class="page">
    <h1>Computed Properties Demo</h1>
    <div class="mb-3">
      <label class="form-label">First name</label>
      <input class="form-control" v-model="first" />
    </div>
    <div class="mb-3">
      <label class="form-label">Last name</label>
      <input class="form-control" v-model="last" />
    </div>
    <p class="mt-2"><strong>Full name (computed):</strong> {{ fullName }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const first = ref('')
const last = ref('')
const fullName = computed(() => `${first.value} ${last.value}`.trim())
</script>

<style scoped>
.page { padding: 1rem 0; }
</style>
