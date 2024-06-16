import { configureStore } from '@reduxjs/toolkit'
import formDataSlice from './reducers/formDataSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        formData:formDataSlice,
    },
  })
}