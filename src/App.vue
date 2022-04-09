<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-btn plain :ripple="false" to="/">Back to list</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
