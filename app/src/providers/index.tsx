import * as React from 'react'

import { StacksProvider } from '@mobily/stacks'

type Props = {
  readonly children: React.ReactNode
}

export const Providers = (props: Props) => {
  const { children } = props

  return (
    <StacksProvider debug={false} spacing={4}>
      {children}
    </StacksProvider>
  )
}
