import api from '@/api'

export default {
  postContact: (person) => api().post('/contact', person),
  getContacts: () => api().get(`/contacts`)
}
