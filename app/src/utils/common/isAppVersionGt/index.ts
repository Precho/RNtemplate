import semver from 'semver'

import { formatAppVersion } from '../formatAppVersion'

export const isAppVersionGt = (value0: string | undefined, value1: string | undefined): boolean => {
  const v1 = formatAppVersion(value0)
  const v2 = formatAppVersion(value1)

  return v1 && v2 ? semver.gt(v1, v2) : false
}
