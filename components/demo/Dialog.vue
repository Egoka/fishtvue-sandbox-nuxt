<script setup lang="ts">
const dialog = ref(false)
</script>

<template>
  <div class="relative">
    <Button @click="dialog = true">Dialog</Button>
    <Dialog v-model="dialog" position="center" close-button class="p-0" size="md">
      <template #default>
        <div class="p-5">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-400">
            Authentication
          </h3>
          <DemoForm/>
        </div>
      </template>
    </Dialog>
  </div>
</template>
