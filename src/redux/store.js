import { configureStore } from '@reduxjs/toolkit';
import onboardingSlice from './slices/onboardingSlice';
import authSlice from './slices/authSlice';

export const store =  configureStore({
  reducer: {
    onboarding: onboardingSlice,
    userAuth: authSlice
  }
})

export default store;