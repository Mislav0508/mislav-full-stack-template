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
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/" 
                        :disabled="!login.password || !login.email"
                        @click="handleLogin(login)">{{ title }}</v-btn>
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
         email: '',
         password: ''
      },
      emailRules: [ 
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async handleLogin(login) {
      try {
        let response = await this.$auth.loginWith('local', { data: login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>