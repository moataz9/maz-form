import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MazBtn from '../MazBtn.vue'

describe('MazButton Compoment', () => {
  it('renders properly', () => {
    const wrapper = mount(MazBtn, { slots: { default: 'A Button' } })
    expect(wrapper.text()).toContain('A Button')
  })
})