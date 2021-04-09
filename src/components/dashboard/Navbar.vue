<template>
 <div class="navbar p-d-flex p-justify-between p-ai-center">
   <div class="navbar-left">
     <Button icon="pi pi-bars" class="p-button-icon-only p-button-rounded p-button-text" />
   </div>
   <div class="navbar-center">
     <span class="p-mr-3" @click="onItemClick('/today')">Today</span>
     <span class="p-mr-3" @click="onItemClick('/project/hjabsdjha')">Project</span>
     <span class="p-mr-3" @click="onItemClick('/settings')">Settings</span>
   </div>
   <div class="navbar-right">
     <Icon
       size="30"
       class="p-mr-3"
     />
     <Avatar label="MB" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" shape="circle" />
     <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
   </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAppStore } from '@/use'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Icon from '../Icon.vue'
import Menu from 'primevue/menu'
import Avatar from 'primevue/avatar'

export default defineComponent({
  name: 'Navbar',
  components: {
    Button,
    Icon,
    Menu,
    Avatar
  },
  setup () {
    const store = useAppStore()
    const router = useRouter()

    const onItemClick = (path: string) => {
      router.push({ path })
    }

    const onLogoutHandle = () => {
      store.dispatch('auth/logout')
    }

    const menu = ref()
    const items = ref([
      {
        label: 'Ustawienia',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Wyloguj',
        icon: 'pi pi-times',
        command: () => {
          onLogoutHandle()
        }
      }
    ])

    const toggle = (event: any) => {
      menu.value.toggle(event)
    }

    return {
      onItemClick,
      menu,
      toggle,
      items
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 48px;
  padding: 0 16px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>
