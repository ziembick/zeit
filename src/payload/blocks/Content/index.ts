import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'M',
        label: 'M',
      },
      {
        value: 'XG',
        label: 'XG',
      },
      {
        value: 'full',
        label: 'Full',
      },
      {
        value: 'P',
        label: 'P',
      },
      {
        value: 'GG',
        label: 'GG',
      },
      {
        value: 'G',
        label: 'G',
      },
    ],
  },
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  fields: [
    invertBackground,
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
