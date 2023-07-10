import App from './app';
import register from 'preact-custom-element';

// Initiate subscriptions before micro-frontend is registered
import './events';

// Adjust element name & observed attributes here
// It also requires change in the public/element.d.ts file
const element = 'myorg-header';
const observedAttributes = ['name', 'isloggedin'];

if (!window.customElements.get(element)) {
  register(App, element, observedAttributes, { shadow: true });
}
