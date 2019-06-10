<template>
  <nav id="nav">
    <v-toolbar dark color="blue darken-4">
      <v-toolbar-title class="text-uppercase">
        <span id="title" class="font-weight-medium display-1">Bryant Coggins</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-md-and-down">
        <v-icon>person</v-icon>
        <v-btn @click="$router.push('/')"  flat class="mr-5">About</v-btn>
      </v-toolbar-items>
      
      <v-toolbar-items class="hidden-md-and-down">
        <v-icon>folder_open</v-icon>
        <v-btn @click="$router.push('portfolio')" flat class="mr-5">Portfolio</v-btn>
      </v-toolbar-items>
      
      <v-toolbar-items class="hidden-md-and-down">
        <v-icon>contact_mail</v-icon>
        <Popup class="mr-5" flat middle/>
      </v-toolbar-items>
      
      <v-toolbar-items class="hidden-md-and-down nav-item">
        <v-icon>work</v-icon>
        <v-btn href="https://drive.google.com/file/d/1a0pX85yFobSRA-HkBq4qW7PQyFLKikcX/view?usp=sharing" target="_blank" flat class="mr-5">Resume</v-btn>
      </v-toolbar-items>
      

      <v-toolbar-side-icon class="hidden-lg-and-up"></v-toolbar-side-icon>
    </v-toolbar>
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },
  data() {
    return {
      links: [
        { icon: 'person', text: 'About', route: '/'},
        { icon: 'folder_open', text: 'Portfolio', route: '/portfolio'},
        { icon: 'work', text: 'Resume', route: '@/assets/BCoggins Resume.pdf'}

      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
/* font-family: 'Oswald', sans-serif; */
#nav {
  font-family: 'Oswald', sans-serif;
}

#title {
  letter-spacing: 10px;
}

.nav-item {
  font-size: 15px;
}

</style>

