declare type Nullable<T> = T | null | undefined
declare type Values<T> = T[keyof T]
declare type EventCallback<A, T = void> = (arg0: A) => T | Promise<T>
declare type EventCallback<A, B, T = void> = (arg0: A, arg1: B) => T | Promise<T>
declare type EmptyObject = Record<string, any>
declare type Payload<T> = {
  readonly payload: T
}
declare type RenderJSX = () => JSX.Element | null
declare type UnpackArray<T> = T extends readonly (infer U)[] ? U : never
declare type Mutable<T> = {
  // eslint-disable-next-line functional/prefer-readonly-type
  current: T
}
declare type Translate = (context: string, id: string, comment?: string) => string

declare const GIT_COMMIT_HASH: string

declare type Color = string & { readonly _: 'Color' }
declare type Route<X = unknown> = string & {
  readonly _1: X
  readonly TAG: 'Route'
}
declare type RouteParams<T> = T extends Route<infer P> ? P : never
declare type PropsWithResource<T, Props = EmptyObject> = Props & {
  readonly resource: import('~/utils/wonka').Resource<T>
}

declare namespace Services {
  declare namespace App {
    declare type Email = {
      readonly subject: string
      readonly body: string
      readonly email: string
    }
  }

  declare namespace I18n {
    declare type Locale = 'en' | 'nb'
  }

  declare namespace LocalStorage {
    declare type OnboardingData = {
      readonly name: string
      readonly gender: string
      readonly birthday: string
      readonly country: import('~/graphql').UserCountry
      readonly zipCode: string | number
      readonly email: string
    }
    declare type RouteLessonData = {
      readonly lessonId: string
      readonly levelId: string
      readonly lessonIndex: number
      readonly mode: import('~/graphql').Mode
      readonly goal: string
    }
    declare type RouteDeepDiveData = {
      readonly lessonId?: string
      readonly backgroundUrl: string
      readonly keyTakeaways: string
      readonly title: string
      readonly videoUrl: string
      readonly subtitlesUrl: string
      readonly expertName: string
      readonly lessonSubject: string
      readonly isVideoWatched?: boolean
      readonly isCompleted?: boolean
      readonly lessonIndex?: number
      readonly lessons: number
      readonly lessonsCompleted: number
      readonly goal?: string
    }
    declare type ManageAccountData = {
      readonly country: import('~/graphql').UserCountry | null
    }
  }

  declare namespace Auth {
    declare type LoginData = {
      readonly email: string
      readonly password: string
    }

    declare type LoginOptions = {
      readonly emitNavigationChange: boolean
    }

    declare type RegisterData = {
      readonly email: string
      readonly password: string
      readonly locale: string
      readonly name: string
      readonly gender: string
      readonly birthday: string
      readonly country: string
      readonly zipCode: string | number
      readonly allowMarketingEmails: string
    }
  }
}

declare module '*.svg' {
  const value: number
  export default number
}

declare module '*.png' {
  const value: number
  export default number
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}

declare module '~/graphql/schema.json' {
  import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast/schema'
  const Schema: IntrospectionData

  export = Schema
}
