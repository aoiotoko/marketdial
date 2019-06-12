<template>
  <div id="new-contact">
    <form v-on:submit.prevent>
      <div>
        <label for="name">Name </label>
        <input id="name" type="text" v-model="person.name">
      </div>
      <div>
        <label for="email">Email </label>
        <input id="email" type="email" v-model="person.email">
      </div>
      <div>
        <label for="phone">Phone number </label>
        <input id="phone" type="text" v-model="person.phone">
      </div>
      <div>
        <label for="favorite">Is favorite? </label>
        <input id="favorite" type="checkbox" v-model="person.is_favorite">
      </div>
      <input id="submit" type="submit" value="Add Contact" @click="addContact">
    </form>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'

export default {
  data () {
    return {
      person: {
        name: null,
        email: null,
        phone: null,
        is_favorite: false
      }
    }
  },
  methods: {
    addContact() {
      ContactService.postContact(this.person)
      .then(function (response){
      })
      .catch(function (error){
      })
    }
  }
}
</script>
