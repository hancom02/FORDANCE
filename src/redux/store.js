import { configureStore } from '@reduxjs/toolkit'
import lessonReducer from './slices/lessonSlice'
import authReducer from './slices/authSlice'
import programReducer from './slices/programSlice'

export const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    auth: authReducer,
    program: programReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false

      //{
      // Ignore these action types
      // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // // Ignore these field paths in all actions
      // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // // Ignore these paths in the state
      // ignoredPaths: ['items.dates'],
      //},
    }),
})

export default store;