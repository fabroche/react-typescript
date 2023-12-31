export enum TODO_FILTERS {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}

export const FILTER_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
