import { createSlice } from '@reduxjs/toolkit'

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState: {
    isConfirmed: false,
  },
  reducers: {
    confirmOnboarding: (state) => {
      state.isConfirmed = true
    }
  }
})

export const { confirmOnboarding } = onboardingSlice.actions

export default onboardingSlice.reducer