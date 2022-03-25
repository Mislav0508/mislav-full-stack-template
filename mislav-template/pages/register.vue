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
                              v-model="register.email"
                           ></v-text-field>
                           <v-text-field
                              :prepend-icon="icons.mdiKey"
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="register.password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" 
                        :disabled="!register.password || !register.email"
                        @click="Register(register)">{{ title }}</v-btn>
                        <v-snackbar v-model="snackbar">
                          {{ error }}
                          <template v-slot:action="{ attrs }">
                            <v-btn
                              color="pink"
                              text
                              v-bind="attrs"
                              @click="snackbar = false"
                            >
                              Close
                            </v-btn>
                          </template>
                        </v-snackbar>
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
      title: 'Register',
      icons: {
         mdiAccount,
         mdiKey  
      },
      register: {
         email: 'mislav0508@hotmail.com',
         password: 'test1234'
      },
      emailRules: [ 
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      error: '',
      snackbar: false,
    }
  },
  methods: {
    async Register(register) {
      let response = await this.$axios.post('auth/register', register)
      console.log(response.data.email);
      if(response.data.email) {
         this.error = response.data.email
         this.snackbar = true
      }
    }
  }
}
</script>

<style>

</style>