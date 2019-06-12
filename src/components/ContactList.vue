<template>
  <div>
    <div class="contact-list">
      <ul>
        <li v-for="contact in contacts" :key="contact.id" class="item" :class="{'favorite': contact.is_favorite}" @click="showInformation(contact.id)" >
          {{ contact.name }}
        </li>
      </ul>
    </div>
    <div class="contact-details">
      <display-details :details="contactDetails" @show="display" :visible="visible"/>
    </div>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'
import DisplayDetails from '@/components/DisplayDetails'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: [],
      contactDetails: null,
      details: null,
      visible: false,
    }
  },
  components: {
    DisplayDetails
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()

      this.contacts = data.contacts
    },
    showInformation (id) {
      let contactDetails = this.contacts.filter(obj => {
        return obj.id == id
      })
      this.contactDetails = contactDetails
      this.visible = true
    },
    display (value) {
      this.visible = value
    }
  }
}
</script>

<style scoped lang="sass">
  $primary: #eaf1f8
  
  .contact-list 
    display: flex
    justify-content: center
    margin-bottom: 200px
    ul
      border: 1px solid #ccc
      list-style: none
      padding-left: 0
      flex: 0 1 400px
      li
        &.item
          text-align: left
          padding: 20px 15px
          &:nth-child(odd)
            background-color: $primary
          &:hover
            text-decoration: underline
            cursor: pointer
          &.favorite
            font-weight: bold

  .contact-details
    background-color: rgba($primary, 0.9)
    font-size: 14px
    text-align: left
    padding: 20px 15px
    position: fixed
    left: 0
    bottom: 0
    width: 100%

</style>
