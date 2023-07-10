import { on } from '@myorg/event';
import type { UserData } from './services/user/types';
import { onLoginEvent } from './services/user/external-events';

// Subscribe to login event
on<UserData>('@myorg/login', onLoginEvent);
