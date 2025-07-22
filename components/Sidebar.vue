<template>
  <div
    class="hidden lg:block fixed top-0 left-0 h-screen w-72 p-4 bg-gray-100 z-40"
  >
    <aside
      class="h-full w-full bg-white rounded-xl shadow-lg flex flex-col justify-between"
    >
      <div>
        <img
          :src="'/icons/logo.svg'"
          alt="icon"
          class="w-24 h-24 ml-auto mr-auto text-white"
        />

        <!-- OVERVIEW Section -->
        <div class="p-6">
          <p class="text-xs font-poppins text-midgray mb-2 px-2">OVERVIEW</p>
          <nav class="space-y-1">
            <NuxtLink
              to="/"
              exact
              class="flex items-center px-3 py-2 rounded-lg text-[15px] hover:bg-gray-50 font-roboto font-medium"
              :class="
                $route.path === '/'
                  ? 'bg-gray-100 text-sidebarActiveHeader'
                  : 'text-midgray'
              "
            >
              <LayoutDashboard
                class="w-4 h-4 mr-2"
                :class="$route.path === '/' ? 'text-blue-600' : 'text-midgray'"
              />
              Dashboard
            </NuxtLink>

            <NuxtLink
              to="/inbox"
              class="flex items-center px-3 py-2 rounded-lg text-[15px] hover:bg-gray-50 font-roboto font-medium"
              :class="
                $route.path === '/inbox'
                  ? 'bg-gray-100 text-sidebarActiveHeader'
                  : 'text-midgray'
              "
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
      </div>

      <!-- Alt kısım: SETTINGS + Logout -->
      <div class="p-6">
        <p class="text-xs font-poppins text-midgray mb-2 px-2">SETTINGS</p>
        <nav class="space-y-1">
          <NuxtLink
            to="/settings"
            class="flex items-center px-3 py-2 rounded-lg text-[15px] hover:bg-gray-50 font-roboto font-medium"
            :class="
              $route.path === '/settings'
                ? 'bg-gray-100 text-sidebarActiveHeader'
                : 'text-midgray'
            "
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
            class="flex items-center px-3 py-2 rounded-lg text-[15px] font-medium text-logoutRed hover:bg-red-50"
          >
            <LogOut class="w-4 h-4 mr-2" />
            Logout
          </NuxtLink>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { LayoutDashboard, Mail, Settings, LogOut } from "lucide-vue-next";
</script>
