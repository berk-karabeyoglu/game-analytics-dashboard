<template>
  <h2
    class="text-[20px] font-poppins font-semibold pl-2 border-l-2 border-gray-200 mb-2"
  >
    Short Description
  </h2>
  <div class="bg-white rounded-2xl flex flex-col justify-between">
    <div>
      <p class="font-roboto text-[15px] font-medium text-midgray">
        {{ shortDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  shortDescription: string;
}>();
</script>
