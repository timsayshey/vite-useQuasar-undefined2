<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar()
console.log('$q', $q)
</script>
<template>
<div>
  useQuasar not working with Vite!<br><br>
  $q: {{ $q || 'undefined' }}
</div>
</template>