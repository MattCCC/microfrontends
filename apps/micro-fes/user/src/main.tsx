import App from './app';
import register from 'preact-custom-element';

// Initiate subscriptions before micro-frontend is registered
import './external-events';

// Adjust element name & observed attributes here
// It also requires change in the <root>/element.d.ts file
const element = 'myorg-user';
const observedAttributes = ['brand', 'theme'];

if (!window.customElements.get(element)) {
  register(App, element, observedAttributes, { shadow: true });
}
