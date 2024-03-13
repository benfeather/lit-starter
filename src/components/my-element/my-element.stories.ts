import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { MyElement } from './my-element'

import './my-element'

export default {
  title: 'My Element',
  parameters: {
    layout: 'centered',
  },
  render: (args) => html`
    <my-element name=${args.name}>
      <p>Slot</p>
    </my-element>
  `,
} satisfies Meta<typeof MyElement>

export const Default: StoryObj = {
  args: {
    name: 'Lit',
  },
}
