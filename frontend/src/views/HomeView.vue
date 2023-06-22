<template>
  <v-main>
    <NavBar />
    <Register />
  </v-main>
</template>

<script>
import { defineComponent } from 'vue'

// Components
import NavBar from '@/components/NavBar.vue'
import Register from '@/components/admin/Register.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
  }
})
</script>
