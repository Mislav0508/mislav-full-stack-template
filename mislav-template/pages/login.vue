<template>
  <v-app>
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              :prepend-icon="icons.mdiAccount"
                              name="Email"
                              label="Email"
                              type="email"
                              :rules="emailRules"
                              v-model="login.email"
                           ></v-text-field>
                           <v-text-field
                              :prepend-icon="icons.mdiKey"
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="login.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <NuxtLink :to="localePath('/')">
                        <v-btn color="success">Home</v-btn></NuxtLink>
                        <v-spacer></v-spacer>
                        <NuxtLink :to="localePath('/dashboard')" @click.native="Login(login)">
                           <v-btn color="primary" 
                           :disabled="!login.password || !login.email"
                          >{{ title }}</v-btn>
                        </NuxtLink>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import { mdiAccount , mdiKey  } from '@mdi/js'
export default {
  data() {
    return {
      title: 'Login',
      icons: {
         mdiAccount,
         mdiKey  
      },
      login: {
         email: 'mislav0508@hotmail.com',
         password: 'test1234'
      },
      emailRules: [ 
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async Login(login) {    
       console.log("login");  
      try {
      let data = await this.$axios.$post("auth/login", login)
      this.$store.dispatch('setToken', data.token)
      this.$store.dispatch('setUser', data.user.email)
      if (data.user.role == 'admin') {
         this.$store.dispatch('setIsAdmin', true)
      }

      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>