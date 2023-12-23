import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MazBtnAdd from '../MazBtnAdd.vue'

describe('MazAddButton Compoment', () => {
  it('renders properly', () => {
    const wrapper = mount(MazBtnAdd, { slots: { default: 'A Button' } })
    expect(wrapper.text()).toContain('A Button')
  })
})