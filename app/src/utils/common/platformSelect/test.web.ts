import { platformSelect } from './index'

describe('platformSelect', () => {
  it('should select web', () => {
    expect(platformSelect({ web: 'web', native: 'native' })).toBe('web')
    expect(platformSelect({ web: 'web', ios: 'ios', android: 'android' })).toBe('web')
    expect(platformSelect({ ios: 'ios', android: 'android', default: 'web' })).toBe('web')
    expect(platformSelect({ native: 'native', default: 'web' })).toBe('web')
  })

  it('should select default platform', () => {
    expect(platformSelect({ android: 0, ios: 10, default: 20 })).toBe(20)
    expect(platformSelect({ native: null, default: 20 })).toBe(20)
    expect(platformSelect({ ios: undefined, default: 20 })).toBe(20)
  })
})
