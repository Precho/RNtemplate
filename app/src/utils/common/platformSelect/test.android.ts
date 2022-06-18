import { platformSelect } from './index'

describe('platformSelect', () => {
  it('should select Android', () => {
    expect(platformSelect({ web: 'web', native: 'native' })).toBe('native')
    expect(platformSelect({ ios: 'ios', android: 'android', default: 'web' })).toBe('android')
    expect(platformSelect({ android: 'android', default: 'default' })).toBe('android')
    expect(platformSelect({ native: 'native', default: 'web' })).toBe('native')
    expect(platformSelect({ android: 'android', default: 'android' })).toBe('android')
    expect(platformSelect({ web: 'web', default: 'android' })).toBe('android')
  })

  it('should select native', () => {
    expect(platformSelect({ native: 10, default: 20 })).toBe(10)
    expect(platformSelect({ web: 0, native: 10, default: 20 })).toBe(10)
    expect(platformSelect({ web: 0, native: null, default: 20 })).toBe(null)
    expect(platformSelect({ web: 0, native: undefined, default: 20 })).toBe(undefined)
  })

  it('should select default platform', () => {
    expect(platformSelect({ web: 0, default: 20 })).toBe(20)
    expect(platformSelect({ web: null, default: 20 })).toBe(20)
    expect(platformSelect({ web: undefined, default: 20 })).toBe(20)
  })
})
