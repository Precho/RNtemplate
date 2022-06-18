import semver from 'semver'

export const formatAppVersion = (version: string | undefined) =>
  semver.valid(semver.coerce(version))
