<template>
  <div id="home">
    <h1>MarketDial Address Book</h1>
    <ContactList />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList'

export default {
  name: 'home',
  components: {
    ContactList
  }
}
</script>
