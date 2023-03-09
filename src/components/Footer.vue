<template>
  <v-toolbar>
    <v-toolbar-items>
      <v-btn>
        <router-link to="/">
          <span class="router-link"><font-awesome-icon icon="fa-solid fa-house" /></span><!-- Dashboard -->
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/assigned-reports">
          <font-awesome-icon icon="fa-solid fa-inbox" /><!-- Toegewezen rapportages -->
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/completed-reports">
        <font-awesome-icon icon="fa-solid fa-file-circle-check" /><!-- Uitgevoerde rapportages -->
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/info">
          <font-awesome-icon icon="fa-solid fa-info" /><!-- Kennisbank -->
        </router-link>
      </v-btn>
      <v-btn>
        <router-link to="/settings">
          <font-awesome-icon icon="fa-solid fa-gears" /><!-- Instellingen -->  
        </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  name: 'Footer-component'
}

</script>

<style>

a{
  color: black;
}

.router-link-exact-active{
  color: rgb(0, 180, 162) !important;
}

</style>





