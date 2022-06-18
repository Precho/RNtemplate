import { renderHook } from '@testing-library/react-hooks'

import { withNotch } from '__tests__/utils'

import { useLayout } from './index'

describe('hooks/useLayout', () => {
  it('should return correct values when notch exists', () => {
    const { result } = renderHook(useLayout)

    expect(result.current).toMatchObject({
      isLandscape: false,
      topInset: 44,
      bottomInset: 34,
    })
  })

  it("should return correct values when notch doesn't exist", () => {
    withNotch(false)

    const { result } = renderHook(useLayout)

    expect(result.current).toMatchObject({
      isLandscape: false,
      topInset: 20,
      bottomInset: 0,
    })
  })
})
