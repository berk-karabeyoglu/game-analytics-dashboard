<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-40"
      @click.self="close"
    >
      <aside class="w-64 h-full bg-white shadow-lg overflow-y-auto">
        <img
          :src="'/icons/logo.svg'"
          alt="icon"
          class="w-24 h-24 ml-auto mr-auto text-white"
        />

        <div class="my-6 px-4">
          <p class="text-xs text-midgray mb-2 px-2 font-poppins">OVERVIEW</p>
          <nav class="space-y-1">
            <NuxtLink
              to="/"
              exact
              class="flex items-center px-3 py-2 rounded-lg text-sm font-medium font-roboto"
              :class="
                $route.path === '/'
                  ? 'bg-gray-100 text-sidebarActiveHeader'
                  : 'text-midgray bg-none'
              "
              @click="close"
            >
              <LayoutDashboard
                class="w-4 h-4 mr-2"
                :class="$route.path === '/' ? 'text-blue-600' : 'text-midgray'"
              />
              Dashboard
            </NuxtLink>

            <NuxtLink
              to="/inbox"
              class="flex items-center px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 font-roboto"
              :class="
                $route.path === '/inbox'
                  ? 'bg-gray-100 text-sidebarActiveHeader'
                  : 'text-midgray bg-none'
              "
              @click="close"
            >
              <Mail
                class="w-4 h-4 mr-2"
                :class="
                  $route.path === '/inbox' ? 'text-blue-600' : 'text-midgray'
                "
              />
              Inbox
            </NuxtLink>
          </nav>
        </div>

        <div class="mt-auto px-4">
          <p class="text-xs text-midgray mb-2 px-2 font-poppins">SETTINGS</p>
          <nav class="space-y-1">
            <NuxtLink
              to="/settings"
              class="flex items-center px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 font-roboto"
              :class="
                $route.path === '/settings'
                  ? 'bg-gray-100 text-sidebarActiveHeader'
                  : 'text-midgray bg-none'
              "
              @click="close"
            >
              <Settings
                class="w-4 h-4 mr-2"
                :class="
                  $route.path === '/settings' ? 'text-blue-600' : 'text-midgray'
                "
              />
              Settings
            </NuxtLink>

            <NuxtLink
              to="/logout"
              class="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 font-roboto"
              @click="close"
            >
              <LogOut class="w-4 h-4 mr-2" />
              Logout
            </NuxtLink>
          </nav>
        </div>
      </aside>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { LayoutDashboard, Mail, Settings, LogOut } from "lucide-vue-next";
defineProps<{ isOpen: boolean }>();
const emit = defineEmits(["close"]);

const close = () => emit("close");
</script>
