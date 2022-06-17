/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable functional/prefer-readonly-type */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react'

declare global {
  namespace React {
    type ForwardRefRenderFunctionFixed<T, P = {}> = {
      (props: PropsWithChildren<P>, ref: MutableRefObject<T | null>): ReactElement | null
      displayName?: string | undefined
      defaultProps?: never | undefined
      propTypes?: never | undefined
    }
    function forwardRef<T, P = {}>(
      render: ForwardRefRenderFunctionFixed<T, P>,
    ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>
  }
}
