import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import ContactList from '@/components/ContactList.vue'

const mockContacts = [{ id: 1, name: 'foo' }]

describe('ContactList.vue', () => {
  it('renders ContactList', () => {
    const wrapper = mount(ContactList)

    wrapper.setData({ contacts: mockContacts })
    expect(wrapper.contains('li')).to.equal(true)
  })
})
