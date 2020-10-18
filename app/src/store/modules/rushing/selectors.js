import { get } from 'lodash'

export const selectRushingState = (state) => get(state, 'rushing')

export const selectRushings = (state) => get(state, 'rushing.rushings')

export const selectRushingLoading = (state) => get(state, 'rushing.loading')

export const selectRushingError = (state) => get(state, 'rushing.error')
