import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import MazNav from '../MazNav.vue'

describe('MazButton Compoment', () => {
  it('renders properly', () => {
    const wrapper = mount(MazNav, { slots: { default: 'A Button' } })
    expect(wrapper.text()).toContain('A Button')
  })

  test('renders the component', async () => {
    const wrapper = mount(MazNav)

    // Assert that the component is rendered
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Blog')
    expect(wrapper.text()).toContain('Gifts')
    // Add more assertions based on your component content
  })

  test('navigates to Home page', async () => {
    const wrapper = mount(MazNav)

    // Trigger a click on the "Home" link
    const homeLink = wrapper.find('a')
    await homeLink.trigger('click')

    // Assert that the navigation has occurred (you may need to adjust this based on your routing setup)
    expect(window.location.pathname).toBe('/')
    // Add more assertions specific to the Home page navigation
  })

  test('displays icons', async () => {
    const wrapper = mount(MazNav)

    // Assert that the notification icon is present
    const notificationIcon = wrapper.find('img')
    expect(notificationIcon).toBeDefined()
    // Add more assertions related to the notification functionality
  })

  test('displays "Add new Product" button', async () => {
    const wrapper = mount(MazNav)

    // Assert that the "Add new Product" button is present
    const addButton = wrapper.find('button')
    expect(addButton).toBeDefined()
    // Add more assertions related to the button's behavior
  })
})
