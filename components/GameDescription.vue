<template>
  <div>
    <h2
      class="text-[20px] font-poppins font-semibold pl-2 border-l-2 border-gray-200 mb-2"
    >
      Short Description
    </h2>
    <p
      class="font-roboto text-[15px] font-medium text-midgray bg-white rounded-2xl p-4"
    >
      {{ shortDescription }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  shortDescription: string;
}>();
</script>
