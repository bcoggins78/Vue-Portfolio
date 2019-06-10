<template>
  <v-footer id = "footer"
    height="auto"
    color="blue-grey darken-3"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        :href='link.path'
        target="_blank"
      >
        <v-icon size="30px">{{ link.icon }}</v-icon>
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
        
      >
        &copy;2019  <strong>Bryant Coggins</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { icon: 'fab fa-linkedin', path: 'https://www.linkedin.com/in/bryant-coggins/'},
        { icon: 'fab fa-github', path: 'https://github.com/bcoggins78'}
      ]
    })
  }
</script>

<style scoped>
#footer {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
