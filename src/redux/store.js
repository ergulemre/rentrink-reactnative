import { configureStore } from '@reduxjs/toolkit';
import onboardingSlice from './onboardingSlice';

export default configureStore({
  reducer: {
    onboarding: onboardingSlice
  }
})