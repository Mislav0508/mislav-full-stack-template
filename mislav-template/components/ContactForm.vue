<template>
  <v-container class="pr-sm-15">
    <v-form  
    id="templateForm"
    name="templateForm"
    method="POST" 
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="sendMessage"
    >

      <input type="hidden" name="form-name" value="templateForm">

      <h2>Do you have any wishes <br> or questions?</h2>

      <v-text-field
        color="#222222"
        clearable
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="Name"
        type="text"
        name="name"
        required
      ></v-text-field>

      <v-text-field
        color="#222222"
        clearable
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="text"
        name="email"
        required
      ></v-text-field>

      <v-text-field
        color="#222222"
        clearable
        v-model="message"
        :rules="messageRules"
        label="Message"
        type="text"
        name="message"
        required
      ></v-text-field>

      <v-btn large color="white" type="submit" :disabled="!name || !email || !message" class="grid-submit-btn mt-5">Send</v-btn>

      <v-alert
      v-if="successAlert"
      class="grid-alert"
      type="success"
      >Your message has been sent!</v-alert>

    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required'
    ],
    successAlert: false,
    error: "greška"
  }),
  methods: {
    encode: function(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    },
    sendMessage: function(event) {
      this.successAlert = true
      const { name, email, message } = Object.fromEntries(new FormData(event.target))
      let formData = { name, email, message }
      console.log(formData);
      fetch(
        "/", 
        {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "templateForm",
          ...formData
          })
      }).then(() => {
        console.log("form was submittet");
        document.getElementById("templateForm").reset();
        setTimeout(() => {
          this.successAlert = false
        }, 3500)
      }).catch(error => alert(error))
    }
  }
}
</script>

<style lang="scss" scoped>


</style>