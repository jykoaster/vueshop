<template>
  <v-main>
    <v-container>
      <v-form ref="form">
        <v-text-field label="Account" required></v-text-field>
        <v-text-field type="password" label="Password" required></v-text-field>
        <v-btn color="success" class="mr-4" @click="login">
          Login
        </v-btn>
      </v-form>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data: () => ({

  }),
  methods: {
    login() {

    }
  }
}
</script>