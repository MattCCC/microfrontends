import { signal } from '@preact/signals';
import type { UserData } from './types';

export const isUserLoggedIn = signal(false);

export const user = signal<UserData>({
  name: '',
  age: null,
  isLoggedIn: false,
});
