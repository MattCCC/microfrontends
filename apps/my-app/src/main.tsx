import App from './app';
import { render } from 'preact';

const app = document.getElementById('app');

if (app) {
  render(<App />, app);
}

// Register Micro Frontends
import '@myorg/user';
