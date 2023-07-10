import { user, isUserLoggedIn } from './signals';
import type { UserData } from './types';

export const onLoginEvent = (event: CustomEvent<UserData>) => {
  const data = event.detail;

  // Data that is not set as app props could be saved to a store or as a signal so to pass it down to components
  user.value = data;

  isUserLoggedIn.value = data.isLoggedIn;
};
