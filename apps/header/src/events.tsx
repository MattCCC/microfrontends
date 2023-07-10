import { on } from '@myorg/event';
import { isUserLoggedIn } from './signals/isLoggedIn';

interface LoginResponse {
  name: string;
  isLoggedIn: boolean;
}

// Subscribe to login event
on<LoginResponse>('@myorg/login', (event) => {
  const { name, isLoggedIn } = event.detail;

  // Example 1:
  // Refresh app props by simply setting element attributes
  const el = document.querySelector('myorg-header');

  if (el) {
    el.setAttribute('name', name);
    el.setAttribute('isloggedin', String(isLoggedIn));
  }

  // Example 2:
  // Data that is not set as app props could be saved to a store or as a signal so to pass it down to components
  isUserLoggedIn.value = isLoggedIn;
});
