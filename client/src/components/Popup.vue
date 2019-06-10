<template>
  <v-dialog max-width="600px" v-model="dialog">
    
      <v-btn large flat slot="activator">Contact</v-btn>
    
    <v-card>
      <v-card-title>
        <h2>Contact Me</h2>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data() {
        dialog: false
    }
}
</script>
